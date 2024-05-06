import React from 'react'
import { Chip, Typography, Tooltip } from "@material-tailwind/react";

function ChatsloadingSkeleton() {
    return (
        <div><div className="flex animate-pulse flex-wrap items-center gap-4 p-5">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gray-300">
            </div>
            <div className="w-max">
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>


            </div>
        </div></div>
    )
}

export default ChatsloadingSkeleton