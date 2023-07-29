import { Text } from "@react-three/drei";

const MyText = () => {
  const fontProps = {
    font: "/Inter-SemiBold.woff",
    letterSpacing: -0.05,
    maxWidth: 3.5,
    lineHeight: 1,
    fontSize: 0.9,
    textAlign: "center",
    color: "black",
  };

  return (
    <>
      <Text {...fontProps} rotation={[0, 0, -Math.PI / 2]}>
        You are great You are amazing great You are
      </Text>
      <mesh>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial toneMapped={false} />
      </mesh>
    </>
  );
};

export { MyText };
