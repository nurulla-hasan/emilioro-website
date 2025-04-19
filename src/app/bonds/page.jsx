"use client"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { MapPin, Pause, Trash2, RefreshCw, Star, Bell, BellOff, List, ChevronDown, X } from "lucide-react"
import Container from "@/components/home/Container"

// Sample data for suggested entries
const suggestedEntries = {
  give: [
    "Teaching Math",
    "Firing Computer",
    "Teaching English",
    "Spend Time Together",
    "Web Development",
    "Graphic Design",
    "Gardening",
    "Cooking Lessons",
    "Babysitting",
  ],
  get: [
    "Cooking Cake",
    "Firing Car Bodies",
    "Doing the Lawn",
    "Hoody",
    "House Cleaning",
    "Car Repair",
    "Language Lessons",
    "Furniture Assembly",
    "Pet Sitting",
  ],
}

// Sample data for user lists
const sampleLists = [
  { id: 1, name: "Favorites", count: 5 },
  { id: 2, name: "Pending", count: 3 },
  { id: 3, name: "Completed", count: 12 },
  { id: 4, name: "Professional Services", count: 7 },
]

// Sample data for simulated entries
const simulatedEntries = [
  { give: "House Cleaning", get: "Web Development" },
  { give: "Car Repair", get: "Graphic Design" },
  { give: "Cooking Lessons", get: "Gardening" },
  { give: "Babysitting", get: "Language Lessons" },
]

const BondExchangePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      give: "Teaching Math",
      get: "Cooking Cake",
      location: "",
      radius: 10,
    },
  })

  const giveValue = watch("give")
  const getValue = watch("get")
  const locationValue = watch("location")
  const radiusValue = watch("radius")

  const [toggle, setToggle] = useState(false)
  const [matchingBonds, setMatchingBonds] = useState([])
  const [showLocationFilter, setShowLocationFilter] = useState(false)
  const [showCreateListModal, setShowCreateListModal] = useState(false)
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [selectedBond, setSelectedBond] = useState(null)
  const [userLists, setUserLists] = useState(sampleLists)
  const [newListName, setNewListName] = useState("")
  const [rating, setRating] = useState(0)
  const [ratingComment, setRatingComment] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionType, setSuggestionType] = useState(null)
  const [customGive, setCustomGive] = useState("")
  const [customGet, setCustomGet] = useState("")
  const [notifications, setNotifications] = useState(true)
  const [showSimulatedEntries, setShowSimulatedEntries] = useState(false)

  const giveInputRef = useRef(null)
  const getInputRef = useRef(null)

  // Simulate fetching matching bonds based on give and get values
  useEffect(() => {
    if (toggle) {
      // Simulate API call delay
      const timer = setTimeout(() => {
        // Generate random number of matches (1-3)
        const matchCount = Math.floor(Math.random() * 3) + 1

        // Generate different types of matches based on matchCount
        if (matchCount === 1) {
          setMatchingBonds([
            {
              id: 1,
              type: "single",
              status: "active",
              users: [
                {
                  id: 101,
                  name: "John Smith",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.8,
                  location: "New York, NY",
                  distance: 3.2,
                },
              ],
            },
          ])
        } else if (matchCount === 2) {
          setMatchingBonds([
            {
              id: 1,
              type: "single",
              status: "active",
              users: [
                {
                  id: 101,
                  name: "John Smith",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.8,
                  location: "New York, NY",
                  distance: 3.2,
                },
              ],
            },
            {
              id: 2,
              type: "bidirectional",
              status: "active",
              users: [
                {
                  id: 102,
                  name: "Sarah Johnson",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.2,
                  location: "Brooklyn, NY",
                  distance: 5.7,
                },
                {
                  id: 103,
                  name: "Michael Brown",
                  give: giveValue,
                  get: getValue,
                  avatar: "/avatar.png",
                  rating: 4.5,
                  location: "Queens, NY",
                  distance: 7.3,
                },
              ],
            },
          ])
        } else {
          setMatchingBonds([
            {
              id: 1,
              type: "single",
              status: "active",
              users: [
                {
                  id: 101,
                  name: "John Smith",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.8,
                  location: "New York, NY",
                  distance: 3.2,
                },
              ],
            },
            {
              id: 2,
              type: "bidirectional",
              status: "active",
              users: [
                {
                  id: 102,
                  name: "Sarah Johnson",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.2,
                  location: "Brooklyn, NY",
                  distance: 5.7,
                },
                {
                  id: 103,
                  name: "Michael Brown",
                  give: giveValue,
                  get: getValue,
                  avatar: "/avatar.png",
                  rating: 4.5,
                  location: "Queens, NY",
                  distance: 7.3,
                },
              ],
            },
            {
              id: 3,
              type: "triangle",
              status: "active",
              users: [
                {
                  id: 104,
                  name: "Emily Davis",
                  give: getValue,
                  get: giveValue,
                  avatar: "/avatar.png",
                  rating: 4.9,
                  location: "Manhattan, NY",
                  distance: 2.1,
                },
                {
                  id: 105,
                  name: "David Wilson",
                  give: giveValue,
                  get: "Teaching English",
                  avatar: "/avatar.png",
                  rating: 3.7,
                  location: "Bronx, NY",
                  distance: 8.5,
                },
                {
                  id: 106,
                  name: "Jessica Taylor",
                  give: "Teaching English",
                  get: getValue,
                  avatar: "/avatar.png",
                  rating: 4.3,
                  location: "Staten Island, NY",
                  distance: 12.8,
                },
              ],
            },
          ])
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setMatchingBonds([])
    }
  }, [toggle, giveValue, getValue, locationValue, radiusValue])

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleBondAction = (bondId, action) => {
    setMatchingBonds((prevBonds) =>
      prevBonds
        .map((bond) => {
          if (bond.id === bondId) {
            switch (action) {
              case "pause":
                return { ...bond, status: "paused" }
              case "delete":
                return { ...bond, status: "deleted" }
              case "retry":
                return { ...bond, status: "active" }
              default:
                return bond
            }
          }
          return bond
        })
        .filter((bond) => bond.status !== "deleted"),
    )
  }

  const handleRateBond = (bond) => {
    setSelectedBond(bond)
    setShowRatingModal(true)
  }

  const submitRating = () => {
    // In a real app, you would send this to your backend
    console.log(`Rated bond ${selectedBond.id} with ${rating} stars. Comment: ${ratingComment}`)
    setShowRatingModal(false)
    setRating(0)
    setRatingComment("")
  }

  const createNewList = () => {
    if (newListName.trim()) {
      const newList = {
        id: userLists.length + 1,
        name: newListName,
        count: 0,
      }
      setUserLists([...userLists, newList])
      setNewListName("")
      setShowCreateListModal(false)
    }
  }

  const handleCustomInputChange = (type, value) => {
    if (type === "give") {
      setCustomGive(value)
      // Show suggestions as user types
      if (value.length > 2) {
        setSuggestionType("give")
        setShowSuggestions(true)
      } else {
        setShowSuggestions(false)
      }
    } else {
      setCustomGet(value)
      // Show suggestions as user types
      if (value.length > 2) {
        setSuggestionType("get")
        setShowSuggestions(true)
      } else {
        setShowSuggestions(false)
      }
    }
  }

  const selectSuggestion = (type, value) => {
    setValue(type, value)
    setShowSuggestions(false)
    if (type === "give") {
      setCustomGive("")
    } else {
      setCustomGet("")
    }
  }

  const toggleNotifications = () => {
    setNotifications(!notifications)
  }

  const confirmRealLifeMeeting = (bondId) => {
    // In a real app, you would send this confirmation to your backend
    alert(`You've confirmed to meet for bond #${bondId} in real life!`)
  }

  // Component to render a single match
  const SingleMatch = ({ match }) => {
    const user = match.users[0]

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 mb-4 text-sm rounded-sm ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-[#EAF0FB]"} border border-[#ABC4ED]`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-[#1C4587]"
              src={user.avatar || "/avatar.png"}
              alt="User avatar"
            />
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-gray-600 flex items-center gap-1">
                <MapPin size={12} />
                {user.location} ({user.distance} km away)
              </div>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(user.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                  />
                ))}
                <span className="text-xs ml-1">{user.rating}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {match.status === "active" ? (
              <>
                <button
                  onClick={() => handleBondAction(match.id, "pause")}
                  className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                  title="Pause"
                >
                  <Pause size={16} />
                </button>
                <button
                  onClick={() => handleBondAction(match.id, "delete")}
                  className="p-1 text-gray-500 hover:text-red-500 cursor-pointer"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleBondAction(match.id, "retry")}
                className="p-1 text-gray-500 hover:text-green-500 cursor-pointer"
                title="Retry"
              >
                <RefreshCw size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="bg-white p-3 rounded-sm border border-gray-200">
          <div className="flex justify-between mb-2">
            <div className="text-xs font-medium">Offers:</div>
            <div className="text-xs font-medium">Wants:</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xs text-[#1C4587] font-medium">{user.give}</div>
            <div className="text-xs text-[#1C4587] font-medium">{user.get}</div>
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <button
            onClick={() => handleRateBond(match)}
            className="text-xs flex items-center gap-1 text-[#1C4587] hover:underline cursor-pointer"
          >
            <Star size={14} /> Rate this bond
          </button>

          <button
            onClick={() => confirmRealLifeMeeting(match.id)}
            className="text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-sm cursor-pointer"
          >
            Confirm Meeting
          </button>
        </div>
      </motion.div>
    )
  }

  // Component to render a bidirectional match
  const BidirectionalMatch = ({ match }) => {
    const users = match.users

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-4 p-4 border ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-white"} border-[#ABC4ED] rounded-sm`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-[#1C4587]">Bidirectional Match</h3>

          <div className="flex gap-2">
            {match.status === "active" ? (
              <>
                <button
                  onClick={() => handleBondAction(match.id, "pause")}
                  className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                  title="Pause"
                >
                  <Pause size={16} />
                </button>
                <button
                  onClick={() => handleBondAction(match.id, "delete")}
                  className="p-1 text-gray-500 hover:text-red-500 cursor-pointer"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleBondAction(match.id, "retry")}
                className="p-1 text-gray-500 hover:text-green-500 cursor-pointer"
                title="Retry"
              >
                <RefreshCw size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
          {/* Left user */}
          <div className="w-full md:w-1/2 p-3 bg-[#EAF0FB] rounded-sm">
            <div className="flex items-center gap-2 mb-2">
              <img
                className="h-8 w-8 rounded-full object-cover border-2 border-[#1C4587]"
                src={users[0].avatar || "/avatar.png"}
                alt="User avatar"
              />
              <div>
                <div className="text-sm font-medium">{users[0].name}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <MapPin size={10} />
                  {users[0].location} ({users[0].distance} km)
                </div>
              </div>
              <div className="ml-auto flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(users[0].rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                  />
                ))}
                <span className="text-xs ml-1">{users[0].rating}</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
              <div className="flex justify-between mb-1">
                <div className="font-medium">Offers:</div>
                <div className="font-medium">Wants:</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#1C4587] font-medium">{users[0].give}</div>
                <div className="text-[#1C4587] font-medium">{users[0].get}</div>
              </div>
            </div>
          </div>

          {/* Right user */}
          <div className="w-full md:w-1/2 p-3 bg-[#EAF0FB] rounded-sm">
            <div className="flex items-center gap-2 mb-2">
              <img
                className="h-8 w-8 rounded-full object-cover border-2 border-[#1C4587]"
                src={users[1].avatar || "/avatar.png"}
                alt="User avatar"
              />
              <div>
                <div className="text-sm font-medium">{users[1].name}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <MapPin size={10} />
                  {users[1].location} ({users[1].distance} km)
                </div>
              </div>
              <div className="ml-auto flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(users[1].rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                  />
                ))}
                <span className="text-xs ml-1">{users[1].rating}</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
              <div className="flex justify-between mb-1">
                <div className="font-medium">Offers:</div>
                <div className="font-medium">Wants:</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#1C4587] font-medium">{users[1].give}</div>
                <div className="text-[#1C4587] font-medium">{users[1].get}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <button
            onClick={() => handleRateBond(match)}
            className="text-xs flex items-center gap-1 text-[#1C4587] hover:underline cursor-pointer"
          >
            <Star size={14} /> Rate this bond
          </button>

          <button
            onClick={() => confirmRealLifeMeeting(match.id)}
            className="text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-sm cursor-pointer"
          >
            Confirm Meeting
          </button>
        </div>
      </motion.div>
    )
  }

  // Component to render a triangle match
  const TriangleMatch = ({ match }) => {
    const users = match.users

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-4 p-4 border ${match.status === "paused" ? "bg-gray-100 opacity-70" : "bg-white"} border-[#ABC4ED] rounded-sm`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-[#1C4587]">Triangle Match</h3>

          <div className="flex gap-2">
            {match.status === "active" ? (
              <>
                <button
                  onClick={() => handleBondAction(match.id, "pause")}
                  className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                  title="Pause"
                >
                  <Pause size={16} />
                </button>
                <button
                  onClick={() => handleBondAction(match.id, "delete")}
                  className="p-1 text-gray-500 hover:text-red-500 cursor-pointer"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleBondAction(match.id, "retry")}
                className="p-1 text-gray-500 hover:text-green-500 cursor-pointer"
                title="Retry"
              >
                <RefreshCw size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {users.map((user, index) => (
            <div key={index} className="p-3 bg-[#EAF0FB] rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="h-8 w-8 rounded-full object-cover border-2 border-[#1C4587]"
                  src={user.avatar || "/avatar.png"}
                  alt="User avatar"
                />
                <div>
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <MapPin size={10} />
                    {user.distance} km
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={i < Math.floor(user.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-xs ml-1">{user.rating}</span>
                </div>
              </div>

              <div className="bg-white p-2 rounded-sm border border-gray-200 text-xs">
                <div className="flex justify-between mb-1">
                  <div className="font-medium">Offers:</div>
                  <div className="font-medium">Wants:</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#1C4587] font-medium">{user.give}</div>
                  <div className="text-[#1C4587] font-medium">{user.get}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-between">
          <button
            onClick={() => handleRateBond(match)}
            className="text-xs flex items-center gap-1 text-[#1C4587] hover:underline cursor-pointer"
          >
            <Star size={14} /> Rate this bond
          </button>

          <button
            onClick={() => confirmRealLifeMeeting(match.id)}
            className="text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-3 py-1 rounded-sm cursor-pointer"
          >
            Confirm Meeting
          </button>
        </div>
      </motion.div>
    )
  }

  // Render the appropriate match component based on type
  const renderMatch = (match) => {
    switch (match.type) {
      case "single":
        return <SingleMatch key={match.id} match={match} />
      case "bidirectional":
        return <BidirectionalMatch key={match.id} match={match} />
      case "triangle":
        return <TriangleMatch key={match.id} match={match} />
      default:
        return null
    }
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-lg md:text-xl text-[#1C4587] font-bold mb-4 md:mb-0 text-center md:text-start">
          Exchange Services & Goods
        </h1>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSimulatedEntries(!showSimulatedEntries)}
            className="text-[#1C4587] border border-[#1C4587] px-3 py-1.5 rounded-sm text-sm font-medium cursor-pointer"
          >
            {showSimulatedEntries ? "Hide Simulated Entries" : "Show Simulated Entries"}
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            <Link href="/bonds/myBondPage">
              <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-4 py-1.5 rounded-sm font-medium">
                My Bonds →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Simulated Entries Section */}
      <AnimatePresence>
        {showSimulatedEntries && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 overflow-hidden"
          >
            <div className="border border-[#ABC4ED] rounded-sm p-4 bg-[#F5F8FF]">
              <h2 className="text-sm font-medium text-[#1C4587] mb-3">Simulated Entries</h2>
              <p className="text-xs text-gray-600 mb-3">
                These are simulated entries that might match your interests. They'll help provide faster responses when
                you search.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {simulatedEntries.map((entry, index) => (
                  <div key={index} className="bg-white p-3 rounded-sm border border-gray-200">
                    <div className="flex justify-between mb-1 text-xs">
                      <div className="font-medium">Offers:</div>
                      <div className="font-medium">Wants:</div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div className="text-[#1C4587] font-medium">{entry.give}</div>
                      <div className="text-[#1C4587] font-medium">{entry.get}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-[0px_19px_48px_0px_#CFC9DDB2] max-w-4xl mt-10 md:mt-14 mx-auto border-[#ABC4ED] border p-5 md:p-8 rounded-sm"
      >
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Give */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <label className="block text-sm text-gray-700 font-medium mb-1">Give</label>
              <div className="relative">
                <div className="border p-1 border-[#1C4587] rounded-sm ">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={customGive}
                      onChange={(e) => handleCustomInputChange("give", e.target.value)}
                      placeholder="Type what you can offer..."
                      className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] px-1 placeholder:text-xs"
                      ref={giveInputRef}
                    />
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setSuggestionType("give")
                          setShowSuggestions(!showSuggestions)
                        }}
                        className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Suggestions dropdown */}
                {showSuggestions && suggestionType === "give" && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-auto">
                    {suggestedEntries.give
                      .filter((item) => item.toLowerCase().includes(customGive.toLowerCase()))
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 text-sm hover:bg-[#EAF0FB] cursor-pointer"
                          onClick={() => selectSuggestion("give", suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                  </div>
                )}
              </div>
              {errors.give && <p className="text-red-500 text-xs mt-1">{errors.give.message}</p>}
            </motion.div>

            {/* Get */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <label className="block text-sm text-gray-700 font-medium mb-1">Get</label>
              <div className="relative">
                <div className="border p-1 border-[#1C4587] rounded-sm">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={customGet}
                      onChange={(e) => handleCustomInputChange("get", e.target.value)}
                      placeholder="Type what you want..."
                      className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] px-1 placeholder:text-xs"
                      ref={getInputRef}
                    />
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setSuggestionType("get")
                          setShowSuggestions(!showSuggestions)
                        }}
                        className="p-1 text-gray-500 hover:text-[#1C4587] cursor-pointer"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Suggestions dropdown */}
                {showSuggestions && suggestionType === "get" && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-auto">
                    {suggestedEntries.get
                      .filter((item) => item.toLowerCase().includes(customGet.toLowerCase()))
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 text-sm hover:bg-[#EAF0FB] cursor-pointer"
                          onClick={() => selectSuggestion("get", suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                  </div>
                )}
              </div>
              {errors.get && <p className="text-red-500 text-xs mt-1">{errors.get.message}</p>}
            </motion.div>
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setShowLocationFilter(!showLocationFilter)}
              className="flex items-center gap-1 text-[#1C4587] text-sm hover:underline cursor-pointer"
            >
              <MapPin size={16} />
              {showLocationFilter ? "Hide location filter" : "Add location filter"}
            </button>

            {showLocationFilter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Location</label>
                  <div className="border p-1 border-[#1C4587] rounded-sm">
                    <input
                      {...register("location")}
                      placeholder="Enter your location"
                      className="w-full outline-none focus:ring-0 border-none text-[14px] text-[#595D62] p-1.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Radius (km): {radiusValue}</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    {...register("radius")}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Lists Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <button
                type="button"
                onClick={() => setShowCreateListModal(true)}
                className="flex items-center gap-1 text-[#1C4587] text-sm hover:underline cursor-pointer"
              >
                <List size={16} />
                Manage Lists
              </button>
            </div>

            {userLists.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {userLists.map((list) => (
                  <div
                    key={list.id}
                    className="px-3 py-1 bg-[#EAF0FB] text-xs rounded-full flex items-center gap-1 cursor-pointer hover:bg-[#D5E3F7]"
                  >
                    <span>{list.name}</span>
                    <span className="bg-[#1C4587] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {list.count}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Matching items section */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden mt-5"
              >
                <div className="border p-4 border-gray-200 rounded-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-sm font-semibold text-[#1C4587]">Matching Bonds</h1>

                    <button
                      type="button"
                      onClick={toggleNotifications}
                      className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#1C4587] cursor-pointer"
                    >
                      {notifications ? (
                        <>
                          <BellOff size={14} />
                          Mute Notifications
                        </>
                      ) : (
                        <>
                          <Bell size={14} />
                          Enable Notifications
                        </>
                      )}
                    </button>
                  </div>

                  {matchingBonds.length > 0 ? (
                    <div>{matchingBonds.map((match) => renderMatch(match))}</div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-center items-center py-8"
                    >
                      <div className="w-8 h-8 border-t-2 border-b-2 border-[#1C4587] rounded-full animate-spin"></div>
                      <p className="ml-3 text-[#1C4587]">Searching for matches...</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Bond / Link Button */}
          <div className="flex justify-center items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setToggle(!toggle)}
              type="button"
              className="w-full md:w-2/6 text-sm bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white p-2 rounded-sm transition-all cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {toggle ? (
                  <Link href="/message">
                    <motion.div
                      key="link"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="w-full h-full"
                    >
                      Link
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Search Bond
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Create List Modal */}
      {showCreateListModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-sm p-5 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#1C4587]">Create New List</h2>
              <button
                onClick={() => setShowCreateListModal(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">List Name</label>
              <input
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Enter list name"
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#1C4587]"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowCreateListModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={createNewList}
                className="px-4 py-2 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-sm text-sm cursor-pointer"
              >
                Create List
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-sm p-5 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#1C4587]">Rate this Bond</h2>
              <button
                onClick={() => setShowRatingModal(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex justify-center mb-2">
                {[...Array(10)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center cursor-pointer ${
                      i < rating ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500">
                {rating === 0 ? "Select a rating" : `You rated: ${rating}/10`}
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Comment (Optional)</label>
              <textarea
                value={ratingComment}
                onChange={(e) => setRatingComment(e.target.value)}
                placeholder="Share your experience..."
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#1C4587] min-h-[100px]"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowRatingModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={submitRating}
                disabled={rating === 0}
                className="px-4 py-2 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white rounded-sm text-sm disabled:opacity-50 cursor-pointer"
              >
                Submit Rating
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </Container>
  )
}

export default BondExchangePage
