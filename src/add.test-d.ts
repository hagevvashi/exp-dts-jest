import { add } from "./add";

// @dts-jest:pass
add(1, 3);

// @ts-expect-error
add("1", "3");
