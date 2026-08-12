import { createContext, useContext } from "react";

type TransitionContextType = {
	play: (callback?: () => void) => void;
};

export const TransitionContext = createContext<TransitionContextType | null>(
	null,
);

export const useTransition = () => {
	const ctx = useContext(TransitionContext);

	if (!ctx) {
		throw new Error("useTransition must be used inside TransitionProvider");
	}

	return ctx;
};
