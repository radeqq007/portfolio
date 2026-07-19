import { createContext, useContext } from "react";

type TransitionContextType = {
	play: (callback?: () => void) => void;
};

export const TransitionContext = createContext<TransitionContextType | null>(
	null,
);

export const useTransistion = () => {
	const ctx = useContext(TransitionContext);

	if (!ctx) {
		throw new Error("useTransistion must be used inside TransistionProvider");
	}

	return ctx;
};
