import { Box, OrbitControls, Stage, useTexture } from "@react-three/drei";
import { useControls } from "leva";

const ThreeView = () => {
	const textures = {
		Wood: {
			map: "./textures/Wood_025_basecolor.jpg",
			normalMap: "./textures/Wood_025_normal.jpg",
			roughnessMap: "./textures/Wood_025_roughness.jpg",
			aoMap: "./textures/Wood_025_ambientOcclusion.jpg",
			// displacementMap: "./textures/Wood_025_height.png",
		},
		Stone: {
			map: "./textures/Stone_Floor_006_basecolor.jpg",
			normalMap: "./textures/Stone_Floor_006_normal.jpg",
			roughnessMap: "./textures/Stone_Floor_006_roughness.jpg",
			aoMap: "./textures/Stone_Floor_006_ambientOcclusion.jpg",
			// displacementMap: "./textures/Stone_Floor_006_height.png",
		},
		Crystals: {
			map: "./textures/Metal_Crystals_001_COLOR.jpg",
			normalMap: "./textures/Metal_Crystals_001_NORM.jpg",
			roughnessMap: "./textures/Metal_Crystals_001_SPEC.jpg",
			metalnessMap: "./textures/Metal_Crystals_001_SPEC.jpg",
			aoMap: "./textures/Metal_Crystals_001_OCC.jpg",
			// displacementMap: "./textures/Metal_Crystals_001_DISP.png",
		},
		Abstract: {
			map: "./textures/Abstract_005_COLOR.jpg",
			normalMap: "./textures/Abstract_005_NORM.jpg",
			roughnessMap: "./textures/Abstract_005_SPEC.jpg",
			metalnessMap: "./textures/Abstract_005_SPEC.jpg",
			aoMap: "./textures/Abstract_005_OCC.jpg",
			// displacementMap: "./textures/Abstract_005_DISP.png",
		},
	};
	const textureOptions = Object.keys(textures);
	const { texture } = useControls({
		texture: { options: textureOptions },
	});

	const props = useTexture(textures[texture]);

	return (
		<>
			<Stage
				intensity={0.7}
				preset="rembrandt"
				shadows={false}
				adjustCamera={1.75}
				environment="city"
			>
				<Box args={[1.0, 1.0, 1.0, 100, 100]}>
					<meshStandardMaterial {...props} />
				</Box>
			</Stage>

			{/* <axesHelper scale={3} /> */}
			<OrbitControls />
		</>
	);
};

export default ThreeView;
