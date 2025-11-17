import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleLoading, setToggleLoading] = useState(null); // roomId being toggled
  const { currency, axios, getToken, user } = useAppContext();

  // derive hotel info from owner's rooms (rooms belong to the same hotel)
  const hotelInfo = rooms && rooms.length > 0 ? rooms[0].hotel : null;
  const avgPrice =
    rooms && rooms.length > 0
      ? Math.round(
          rooms.reduce((sum, r) => sum + (r.pricePerNight || 0), 0) / rooms.length
        )
      : 0;

  // Optimistic UI for toggling room availability
  const toggleAvailability = async (roomId) => {
    setToggleLoading(roomId);
    try {
      const { data } = await axios.post(
        "/api/rooms/toggle-availability",
        { roomId },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );
      if (data.success) {
        toast.success(data.message || "Room availability updated");
        // Update room availability in state
        setRooms((prevRooms) =>
          prevRooms.map((room) =>
            room._id === roomId
              ? { ...room, isAvailable: !room.isAvailable }
              : room
          )
        );
      } else {
        toast.error(data?.message || "Failed to update room availability");
      }
    } catch (error) {
      const serverMessage = error?.response?.data?.message;
      toast.error(serverMessage || error.message || "Something went wrong");
    } finally {
      setToggleLoading(null);
    }
  };

  useEffect(() => {
    if (!user) return;

    let mounted = true;

    const fetchRooms = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/rooms/owner", {
          headers: { Authorization: `Bearer ${await getToken()}` },
        });
        if (!mounted) return;
        if (data.success) {
          setRooms(data.rooms);
        } else {
          toast.error(data?.message || "Failed to fetch rooms");
        }
      } catch (error) {
        const serverMessage = error?.response?.data?.message;
        toast.error(serverMessage || error.message || "Something went wrong");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchRooms();

    return () => {
      mounted = false;
    };
  }, [user, axios, getToken]);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="List of Rooms"
        subTitle="View, edit, or manage your listed rooms. Ensure all details are accurate for a better booking experience."
      />
      {/* Hotel summary card for the owner */}
      <div className="mt-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src={hotelInfo?.image || assets.regImage}
            alt={hotelInfo?.name || "Hotel"}
            className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
              {hotelInfo?.name || "Your Registered Hotel"}
            </h3>
            {hotelInfo?.address && (
              <p className="text-sm text-gray-500 truncate">{hotelInfo.address}</p>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-gray-600">Total rooms: <strong className="text-gray-900">{rooms.length}</strong></span>
              <span className="text-gray-600">Avg. price: <strong className="text-amber-600">{currency} {avgPrice}</strong></span>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            Loading...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-gray-800 font-medium">Room Type</th>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  Facility
                </th>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  Price /Night
                </th>
                <th className="py-3 px-4 text-gray-800 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rooms.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {item.roomType}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                    {item.amenities.join(", ")}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center max-sm:hidden">
                    {currency} {item.pricePerNight}
                  </td>
                  <td className="py-3 px-4 text-red-500 border-t border-gray-300 text-center">
                    <label className="relative inline-flex cursor-pointer items-center text-gray-900 gap-3">
                      <input
                        onChange={() => toggleAvailability(item._id)}
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.isAvailable}
                        disabled={toggleLoading === item._id}
                      />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-amber-500 transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 h-5 w-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ListRooms;
