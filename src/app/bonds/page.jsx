"use client"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      give: "Teaching Math",
      get: "Cooking Cake",
    },
  })

  const giveValue = watch("give")
  const getValue = watch("get")

  const [toggle, setToggle] = useState(false)
  const [matchingBonds, setMatchingBonds] = useState([])

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
              users: [{ id: 101, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" }],
            },
          ])
        } else if (matchCount === 2) {
          setMatchingBonds([
            {
              id: 1,
              type: "single",
              users: [{ id: 101, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" }],
            },
            {
              id: 2,
              type: "bidirectional",
              users: [
                { id: 102, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" },
                { id: 103, name: "Mr. john", give: giveValue, get: getValue, avatar: "/heroImage.png" },
              ],
            },
          ])
        } else {
          setMatchingBonds([
            {
              id: 1,
              type: "single",
              users: [{ id: 101, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" }],
            },
            {
              id: 2,
              type: "bidirectional",
              users: [
                { id: 102, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" },
                { id: 103, name: "Mr. john", give: giveValue, get: getValue, avatar: "/heroImage.png" },
              ],
            },
            {
              id: 3,
              type: "triangle",
              users: [
                { id: 104, name: "Mr. john", give: getValue, get: giveValue, avatar: "/heroImage.png" },
                { id: 105, name: "Mr. john", give: giveValue, get: "Teaching English", avatar: "/heroImage.png" },
                { id: 106, name: "Mr. john", give: "Teaching English", get: getValue, avatar: "/heroImage.png" },
              ],
            },
          ])
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setMatchingBonds([])
    }
  }, [toggle, giveValue, getValue])

  const onSubmit = (data) => {
    console.log(data)
  }

  // Component to render a single match
  const SingleMatch = ({ user }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 mb-4 text-sm rounded-md bg-[#EAF0FB] flex items-center gap-2"
    >
      <img className="h-8 w-8 rounded-full object-cover" src={user.avatar || "/heroImage.png"} alt="User avatar" />
      <div>
        {user.name}{" "}
        <span className="text-[#1C4587]">
          ({user.give} - {user.get})
        </span>
      </div>
    </motion.div>
  )

  // Component to render a bidirectional match
  const BidirectionalMatch = ({ users }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 p-3 border border-gray-200 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0"
    >
      {/* Left user */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={users[0].avatar || "/heroImage.png"}
          alt="User avatar"
        />
        <div className="text-sm">
          {users[0].name}{" "}
          <span className="text-[#1C4587]">
            ({users[0].give} - {users[0].get})
          </span>
        </div>
      </div>

      {/* Right user */}
      <div className="flex items-center gap-2 w-full md:w-auto md:flex-row-reverse">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={users[1].avatar || "/heroImage.png"}
          alt="User avatar"
        />
        <div className="text-sm md:text-right">
          <span className="text-[#1C4587]">
            ({users[1].give} - {users[1].get})
          </span>{" "}
          {users[1].name}
        </div>
      </div>
    </motion.div>
  )

  // Component to render a triangle match
  const TriangleMatch = ({ users }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 p-3 border border-gray-200 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0"
    >
      {/* Left user */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={users[0].avatar || "/heroImage.png"}
          alt="User avatar"
        />
        <div className="text-sm">
          {users[0].name}{" "}
          <span className="text-[#1C4587]">
            ({users[0].give} - {users[0].get})
          </span>
        </div>
      </div>

      {/* Middle user */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={users[1].avatar || "/heroImage.png"}
          alt="User avatar"
        />
        <div className="text-sm">
          {users[1].name}{" "}
          <span className="text-[#1C4587]">
            ({users[1].give} - {users[1].get})
          </span>
        </div>
      </div>

      {/* Right user */}
      <div className="flex items-center gap-2 w-full md:w-auto md:flex-row-reverse">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={users[2].avatar || "/heroImage.png"}
          alt="User avatar"
        />
        <div className="text-sm md:text-right">
          <span className="text-[#1C4587]">
            ({users[2].give} - {users[2].get})
          </span>{" "}
          {users[2].name}
        </div>
      </div>
    </motion.div>
  )

  // Render the appropriate match component based on type
  const renderMatch = (match) => {
    switch (match.type) {
      case "single":
        return <SingleMatch key={match.id} user={match.users[0]} />
      case "bidirectional":
        return <BidirectionalMatch key={match.id} users={match.users} />
      case "triangle":
        return <TriangleMatch key={match.id} users={match.users} />
      default:
        return null
    }
  }

  return (
    <div className="w-full xl:w-6/9 lg:w-5/6 p-5 mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-lg md:text-xl text-[#1C4587] font-bold mb-4 md:mb-0 text-center md:text-start">
          Exchange Services & Goods
        </h1>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          <Link href="/bonds/myBondPage">
            <button className="cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white px-4 py-2 rounded-md font-medium">
              My Bond →
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-[0px_19px_48px_0px_#CFC9DDB2] max-w-4xl mt-10 md:mt-14 mx-auto border-[#ABC4ED] border p-5 md:p-8 rounded-lg"
      >
        {/* Text */}
        <p className="text-center font-bold text-[#1C4587] mb-6">
          Swap services & goods effortlessly. Connect, trade, and finalize your exchange with ease!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Give */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <label className="block text-sm text-[#1C4587] font-medium mb-1">Give</label>
              <div className="border p-2 border-[#1C4587] rounded-lg">
                <select
                  {...register("give", { required: "Give is required" })}
                  className="w-full outline-none border-[#1C4587] rounded-lg text-xs text-[#595D62]"
                >
                  <option value="Teaching Math">Teaching Math</option>
                  <option value="Firing Computer">Firing Computer</option>
                  <option value="Teaching English">Teaching English</option>
                  <option value="Spend Time Together">Spend Time Together</option>
                </select>
              </div>
              {errors.give && <p className="text-red-500 text-sm mt-1">{errors.give.message}</p>}
            </motion.div>

            {/* Get */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <label className="block text-sm text-[#1C4587] font-medium mb-1">Get</label>
              <div className="border p-2 border-[#1C4587] rounded-lg">
                <select
                  {...register("get", { required: "Get is required" })}
                  className="w-full outline-none rounded-lg text-[#595D62] text-xs"
                >
                  <option value="Cooking Cake">Cooking Cake</option>
                  <option value="Firing Car Bodies">Firing Car Bodies</option>
                  <option value="Doing the Lawn">Doing the Lawn</option>
                  <option value="Hoody">Hoody</option>
                </select>
              </div>
              {errors.get && <p className="text-red-500 text-sm mt-1">{errors.get.message}</p>}
            </motion.div>
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
                <div className="border p-4 border-gray-200 rounded-lg">
                  <h1 className="text-sm font-semibold text-[#1C4587] mb-4">Matching Bonds</h1>

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
              className="w-full md:w-2/5 bg-gradient-to-b from-[#1C4587] to-[#3279EA] text-white p-2 rounded-lg transition-all"
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
    </div>
  )
}

export default Page

