"use client"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Container from "@/components/layout/Container"
import { bidirectionalBond, singleBond, triangleBond, sampleLists, simulatedEntries , suggestedEntries  } from "@/data/data"
import CreateListModal from "@/components/body/bonds/CreateListModal"
import BondsRatingModal from "@/components/body/bonds/RatingModal"
import EntriesSection from "@/components/body/bonds/EntriesSection"
import From from "@/components/body/bonds/From"
import SingleMatch from "@/components/body/bonds/SingleMatch"
import BidirectionalMatch from "@/components/body/bonds/BidirectionalMatch"
import TriangleMatch from "@/components/body/bonds/TriangleMatch"


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

  const giveValue = watch("give");
  const getValue = watch("get");
  const locationValue = watch("location");
  const radiusValue = watch("radius");
  const [toggle, setToggle] = useState(false);
  const [matchingBonds, setMatchingBonds] = useState([]);
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedBond, setSelectedBond] = useState(null);
  const [userLists, setUserLists] = useState(sampleLists);
  const [newListName, setNewListName] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionType, setSuggestionType] = useState(null);
  const [customGive, setCustomGive] = useState("");
  const [customGet, setCustomGet] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [showSimulatedEntries, setShowSimulatedEntries] = useState(false);
  const giveInputRef = useRef(null);
  const getInputRef = useRef(null);

  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => {
        const matchCount = Math.floor(Math.random() * 3) + 1;

        if (matchCount === 1) {
          setMatchingBonds([singleBond(giveValue, getValue)]);
        } else if (matchCount === 2) {
          setMatchingBonds([
            singleBond(giveValue, getValue),
            bidirectionalBond(giveValue, getValue),
          ]);
        } else {
          setMatchingBonds([
            singleBond(giveValue, getValue),
            bidirectionalBond(giveValue, getValue),
            triangleBond(giveValue, getValue),
          ]);
        }
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setMatchingBonds([]);
    }
  }, [toggle, giveValue, getValue, locationValue, radiusValue]);


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
    setValue(type, value);
    if (type === "give") {
      setCustomGive(value);
    } else {
      setCustomGet(value);
    }
    setShowSuggestions(false);
  }


  const toggleNotifications = () => {
    setNotifications(!notifications)
  }

  const confirmRealLifeMeeting = (bondId) => {
    alert(`You've confirmed to meet for bond #${bondId} in real life!`)
  }


  // Render the appropriate match component based on type
  const renderMatch = (match) => {
    switch (match.type) {
      case "single":
        return <SingleMatch key={match.id} match={match} handleBondAction={handleBondAction} handleRateBond={handleRateBond} confirmRealLifeMeeting={confirmRealLifeMeeting}/>
      case "bidirectional":
        return <BidirectionalMatch key={match.id} match={match} handleBondAction={handleBondAction} handleRateBond={handleRateBond} confirmRealLifeMeeting={confirmRealLifeMeeting}/>
      case "triangle":
        return <TriangleMatch key={match.id} match={match} handleBondAction={handleBondAction} handleRateBond={handleRateBond} confirmRealLifeMeeting={confirmRealLifeMeeting}/>
      default:
        return null
    }
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-lg md:text-xl text-primary font-bold mb-4 md:mb-0 text-center md:text-start">
          Exchange Services & Goods
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowSimulatedEntries(!showSimulatedEntries)}
            className="text-primary border border-primary px-3 py-[7px] rounded-sm text-xs font-medium cursor-pointer"
          >
            {showSimulatedEntries ? "Hide Simulated Entries" : "Show Simulated Entries"}
          </button>

          <div className="cursor-pointer">
            <Link href="/bonds/all-bonds">
              <button className="cursor-pointer text-xs bg-button text-white px-4 py-2 rounded-sm font-medium">
                All Bonds →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Simulated Entries Section */}
      <AnimatePresence>
        <EntriesSection
          showSimulatedEntries={showSimulatedEntries}
          simulatedEntries={simulatedEntries}
        />
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-[0px_19px_48px_0px_#CFC9DDB2] max-w-4xl mt-10 md:mt-14 mx-auto border-[#ABC4ED] border p-5 md:p-8 rounded-sm"
      >
        {/* Form */}
        <From {...{
          handleSubmit,
          onSubmit,
          customGive,
          handleCustomInputChange,
          giveInputRef,
          setSuggestionType,
          showSuggestions,
          suggestionType,
          setShowSuggestions,
          suggestedEntries,
          selectSuggestion,
          errors,
          customGet,
          getInputRef,
          showLocationFilter,
          setShowLocationFilter,
          register,
          radiusValue,
          setShowCreateListModal,
          userLists,
          toggle,
          setToggle,
          notifications,
          toggleNotifications,
          matchingBonds,
          renderMatch
        }} />
      </motion.div>

      {/* Create List Modal */}
      <CreateListModal
        setShowCreateListModal={setShowCreateListModal}
        showCreateListModal={showCreateListModal}
        newListName={newListName}
        setNewListName={setNewListName}
        createNewList={createNewList}
      />

      {/* Rating Modal */}
      <BondsRatingModal {...{ showRatingModal, setShowRatingModal, setRating, rating, ratingComment, setRatingComment, submitRating }} />
    </Container>
  )
}

export default BondExchangePage
