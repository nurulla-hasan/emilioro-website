import React from 'react';
import { motion } from 'framer-motion';

const EntriesSection = ({ showSimulatedEntries, simulatedEntries }) => {
    return (
        <>
            {showSimulatedEntries && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-5 overflow-hidden"
                >
                    <div className="border border-[#ABC4ED] rounded-sm p-4 bg-[#F5F8FF]">
                        <h2 className="text-sm font-medium text-primary mb-3">Simulated Entries</h2>
                        <p className="text-xs text-gray-600 mb-3">
                            These are simulated entries that might match your interests. They'll help provide faster responses when
                            you search.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {simulatedEntries?.map((entry, index) => (
                                <div key={index} className="bg-white p-3 rounded-sm border border-gray-200">
                                    <div className="flex justify-between mb-1 text-xs">
                                        <div className="font-medium">Offers:</div>
                                        <div className="font-medium">Wants:</div>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <div className="text-primary font-medium">{entry.give}</div>
                                        <div className="text-primary font-medium">{entry.get}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default EntriesSection;
