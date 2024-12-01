import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState } from "react";

export const RootProvider = ({ children, CONVEX_URL }: { children: React.ReactNode, CONVEX_URL: string }) => {

    const [convex] = useState(() => new ConvexReactClient(CONVEX_URL));

    return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};