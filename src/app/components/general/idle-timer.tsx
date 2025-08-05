"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useIdleTimer } from "react-idle-timer";
import style from "@/app/assets/scss/components/idleTimer.module.scss";
import clsx from "clsx";

interface Props {
    timer: number;
    idleStatus: string;
    setStatus: Dispatch<SetStateAction<string>>;
};

export default function IdleTimer(props: Props) {
    const [state, setState] = useState<string>("Active");
    const [count, setCount] = useState<number>(0);
    const [remaining, setRemaining] = useState<number>(0);

    const onIdle = () => {
        props.setStatus("Idle");
        setState('Idle')
    };

    const onActive = () => {
        props.setStatus("Active");
        setState("Active");
    };

    const onAction = () => {
        setCount(count + 1);
    };

    const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        onAction,
        timeout: props.timer * 1000,
        throttle: 500
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(Math.ceil(getRemainingTime() / 1000))
        }, 500);

        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div className="d-none">
            {/* {process.env.isDebugMode && (
                <div className={clsx(`${style.idleTimer}`, { "d-none": !process.env.isDebugMode })}>
                    <h2>React Idle Timer</h2>
                    <p>Current State: {state}</p>
                    <p>Action Events: {count}</p>
                    <p>{remaining} seconds remaining</p>
                </div>
            )} */}
        </div>
    );
};
