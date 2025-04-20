// src/components/HeroModels/Setup.jsx

import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Setup({ onMonitorClick, ...props }) {
  const { nodes, materials } = useGLTF('/models/computer-setup.glb');

  // Identifikace meshe obrazovky
  const monitorScreenMesh = nodes.MY_SCREEN_MY_SCREEN_0;

  // Přiřazení onClick handleru do userData meshe po načtení a při změně prop
  useEffect(() => {
    if (monitorScreenMesh && typeof onMonitorClick === 'function') {
      monitorScreenMesh.userData.onClick = onMonitorClick;
    } else if (!monitorScreenMesh) {
      console.warn("Setup.jsx: Monitor mesh 'MY_SCREEN_MY_SCREEN_0' not found.");
    } else if (typeof onMonitorClick !== 'function'){
      console.warn("Setup.jsx: 'onMonitorClick' prop is not a function.");
    }
  }, [monitorScreenMesh, onMonitorClick]);

  // Handler kliknutí na celé skupině modelu
  const handleGroupClick = (event) => {
    // Zastavení propagace události
    event.stopPropagation();

    // Kontrola, zda bylo kliknuto na správný mesh (podle jména)
    // a zda má tento mesh přiřazený platný onClick handler v userData
    if (monitorScreenMesh && event.object.name === monitorScreenMesh.name && typeof monitorScreenMesh.userData.onClick === 'function') {
      // Volání funkce uložené v userData našeho referenčního meshe
      monitorScreenMesh.userData.onClick();
    }
    // Pokud ne, nic se neděje (už nelogujeme "Clicked on other part")
  };

  return (
      // Přidání onClick handleru na celou skupinu modelu
      <group {...props} dispose={null} onClick={handleGroupClick}>
        <group name="Scene">
          <group name="Sketchfab_model" position={[2.958, -3.039, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <group name="gaming_desktop_pc2fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="RootNode">
                <group name="Text021_456" position={[157.211, 48.437, 455.625]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[6.414, 5.272, 6.414]}>
                  <group name="Object_844">
                    <mesh name="Object_844_Material066_0" geometry={nodes.Object_844_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="aorus_case_fans" position={[89.589, 288.681, -355.423]} rotation={[0, 1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans_aorus_case_fans_0" geometry={nodes.aorus_case_fans_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans001" position={[69.018, 288.681, -355.423]} rotation={[0, -1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans001_aorus_case_fans_0" geometry={nodes.aorus_case_fans001_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans002" position={[89.589, 178.114, -355.423]} rotation={[0, 1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans002_aorus_case_fans_0" geometry={nodes.aorus_case_fans002_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans003" position={[69.018, 178.114, -355.423]} rotation={[0, -1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans003_aorus_case_fans_0" geometry={nodes.aorus_case_fans003_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans004" position={[-241.083, 292.602, -334.76]} rotation={[0, 1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans004_aorus_case_fans_0" geometry={nodes.aorus_case_fans004_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans005" position={[-261.653, 292.602, -334.76]} rotation={[0, -1.571, 0]} scale={108.517}>
                  <mesh name="aorus_case_fans005_aorus_case_fans_0" geometry={nodes.aorus_case_fans005_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans006" position={[-171.287, 333.894, -355.289]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.314}>
                  <mesh name="aorus_case_fans006_aorus_case_fans_0" geometry={nodes.aorus_case_fans006_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans007" position={[-171.287, 354.805, -355.289]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.314}>
                  <mesh name="aorus_case_fans007_aorus_case_fans_0" geometry={nodes.aorus_case_fans007_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans008" position={[-44.291, 333.894, -355.289]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.314}>
                  <mesh name="aorus_case_fans008_aorus_case_fans_0" geometry={nodes.aorus_case_fans008_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_case_fans009" position={[-44.291, 354.805, -355.289]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.314}>
                  <mesh name="aorus_case_fans009_aorus_case_fans_0" geometry={nodes.aorus_case_fans009_aorus_case_fans_0.geometry} material={materials['Material.074_0']} />
                </group>
                <group name="aorus_logotranspa" position={[-182.428, 181.699, -315.847]} scale={[8.646, 8.646, 9.09]}>
                  <mesh name="aorus_logotranspa_aorus_logotranspa_0" geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry} material={materials['Material.074_24']} />
                </group>
                <group name="BezierCircle" position={[87.654, 308.188, -282.266]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={5.703}>
                  <mesh name="BezierCircle_Material104_0" geometry={nodes.BezierCircle_Material104_0.geometry} material={materials['Material.104']} />
                </group>
                <group name="BezierCurve" position={[73.034, 238.196, -437.388]} rotation={[Math.PI, 0, Math.PI / 2]} scale={100}>
                  <mesh name="BezierCurve_Material088_0" geometry={nodes.BezierCurve_Material088_0.geometry} material={materials['Material.088']} />
                </group>
                <group name="BezierCurve001" position={[-57.663, 118.32, -315.595]} rotation={[Math.PI / 2, -1.234, 0]} scale={100}>
                  <mesh name="BezierCurve001_Material085_0" geometry={nodes.BezierCurve001_Material085_0.geometry} material={materials['Material.085']} />
                </group>
                <group name="BezierCurve002" position={[-31.438, 183.785, -440.156]} rotation={[Math.PI / 2, -1.234, 0]} scale={100}>
                  <mesh name="BezierCurve002_Material087_0" geometry={nodes.BezierCurve002_Material087_0.geometry} material={materials['Material.087']} />
                </group>
                <group name="BezierCurve003" position={[-158.898, 127.661, 299.394]} rotation={[2.464, -1.571, 0]} scale={100}>
                  <mesh name="BezierCurve003_Material091_0" geometry={nodes.BezierCurve003_Material091_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="BezierCurve004" position={[-33.393, 29.826, -26.834]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="BezierCurve004_Material099_0" geometry={nodes.BezierCurve004_Material099_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="BezierCurve005" position={[83.413, 25.966, 360.696]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                  <mesh name="BezierCurve005_Material103_0" geometry={nodes.BezierCurve005_Material103_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="BezierCurve006" position={[-275.73, 25.966, 569.745]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                  <mesh name="BezierCurve006_Material106_0" geometry={nodes.BezierCurve006_Material106_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="BezierCurve007" position={[-271.339, 25.966, 569.745]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                  <mesh name="BezierCurve007_Material105_0" geometry={nodes.BezierCurve007_Material105_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="BezierCurve008" position={[-280.431, 25.966, 28.498]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                  <mesh name="BezierCurve008_Material107_0" geometry={nodes.BezierCurve008_Material107_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="bg2" position={[-153.705, 194.917, 83.027]} rotation={[1.572, -1.442, 1.567]} scale={113.034}>
                  <mesh name="bg2_bg2_0" geometry={nodes.bg2_bg2_0.geometry} material={materials['Material.074_29']} />
                </group>
                <group name="Color-PewDiePie-Logo" position={[129.541, 46.552, -27.476]} rotation={[-Math.PI / 2, 0.284, Math.PI / 2]} scale={12.411}>
                  <mesh name="Color-PewDiePie-Logo_Color-PewDiePie-Logo_0" geometry={nodes['Color-PewDiePie-Logo_Color-PewDiePie-Logo_0'].geometry} material={materials['Material.074_27']} />
                </group>
                <group name="Cube" position={[-61.024, -0.556, 156.09]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-368.949, -731.636, -25.976]}>
                  <mesh name="Cube_Material_0" geometry={nodes.Cube_Material_0.geometry} material={materials['Material.001']} />
                </group>
                <group name="Cube001" position={[-138.594, 295.654, 300.405]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.342, 4.051, 184.091]}>
                  <mesh name="Cube001_Material055_0" geometry={nodes.Cube001_Material055_0.geometry} material={materials['Material.055']} />
                </group>
                <group name="Cube002" position={[-146.706, 263.678, 300.405]} rotation={[Math.PI / 2, 0.122, -Math.PI / 2]} scale={[-325.342, -14.747, -152.853]}>
                  <mesh name="Cube002_Material044_0" geometry={nodes.Cube002_Material044_0.geometry} material={materials['Material.044']} />
                </group>
                <group name="Cube003" position={[-157.131, 447.652, 300.405]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.342, 4.051, 31.034]}>
                  <mesh name="Cube003_Material001_0" geometry={nodes.Cube003_Material001_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube004" position={[-148.741, 180.97, 299.246]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[167.599, 17.793, 193.498]}>
                  <mesh name="Cube004_Material002_0" geometry={nodes.Cube004_Material002_0.geometry} material={materials['Material.002']} />
                </group>
                <group name="Cube005" position={[-186.532, 291.564, 297.425]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[16.32, 28.812, 12.936]}>
                  <mesh name="Cube005_Material003_0" geometry={nodes.Cube005_Material003_0.geometry} material={materials['Material.003']} />
                </group>
                <group name="Cube006" position={[-202.956, -64.822, 300.405]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[40.588, 16.64, 531.608]}>
                  <mesh name="Cube006_Material043_0" geometry={nodes.Cube006_Material043_0.geometry} material={materials['Material.043']} />
                </group>
                <group name="Cube007" position={[-213.018, 35.333, 296.055]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-193.85, -54.116, -9.321]}>
                  <mesh name="Cube007_Material037_0" geometry={nodes.Cube007_Material037_0.geometry} material={materials['Material.037']} />
                </group>
                <group name="Cube008" position={[-80.199, 31.648, 453.149]} rotation={[-Math.PI / 2, 0, 1.249]} scale={[49.07, 108.779, 5.648]}>
                  <mesh name="Cube008_Material036_0" geometry={nodes.Cube008_Material036_0.geometry} material={materials['Material.039']} />
                </group>
                <group name="Cube009" position={[-80.199, 31.648, 163.794]} rotation={[-Math.PI / 2, 0, 1.861]} scale={[49.07, 108.779, 5.648]}>
                  <mesh name="Cube009_Material039_0" geometry={nodes.Cube009_Material039_0.geometry} material={materials['Material.039']} />
                </group>
                <group name="Cube010" position={[-181.146, 31.637, 295.796]} rotation={[-Math.PI / 2, 0, 3.136]} scale={[43.412, 96.236, 4.997]}>
                  <mesh name="Cube010_Material006_0" geometry={nodes.Cube010_Material006_0.geometry} material={materials['Material.006']} />
                </group>
                <group name="Cube011" position={[-85.935, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.489, 89.971, 157.347]}>
                  <mesh name="Cube011_Material010_0" geometry={nodes.Cube011_Material010_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube012" position={[-85.935, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.489, 89.971, 157.347]}>
                  <mesh name="Cube012_Material011_0" geometry={nodes.Cube012_Material011_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube013" position={[82.766, 33.228, -353.609]} rotation={[Math.PI / 2, 0.237, -Math.PI]} scale={[-5.986, -88.363, -12.138]}>
                  <mesh name="Cube013_Material015_0" geometry={nodes.Cube013_Material015_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube014" position={[-253.445, 33.228, -353.609]} rotation={[Math.PI / 2, -0.136, Math.PI]} scale={[-5.979, -88.363, -12.152]}>
                  <mesh name="Cube014_Material014_0" geometry={nodes.Cube014_Material014_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube015" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube015_Material016_0" geometry={nodes.Cube015_Material016_0.geometry} material={materials['Material.074_1']} />
                </group>
                <group name="Cube016" position={[79.294, 177.861, -355.562]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.674, 50.674, 10]}>
                  <mesh name="Cube016_Material017_0" geometry={nodes.Cube016_Material017_0.geometry} material={materials['Material.017']} />
                </group>
                <group name="Cube017" position={[-251.377, 292.349, -334.899]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.674, 50.674, 10]}>
                  <mesh name="Cube017_Material017_0" geometry={nodes.Cube017_Material017_0.geometry} material={materials['Material.017']} />
                </group>
                <group name="Cube018" position={[79.294, 288.428, -355.562]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.674, 50.674, 10]}>
                  <mesh name="Cube018_Material017_0" geometry={nodes.Cube018_Material017_0.geometry} material={materials['Material.017']} />
                </group>
                <group name="Cube019" position={[-171.544, 344.359, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.513, 51.513, 10.165]}>
                  <mesh name="Cube019_Material017_0" geometry={nodes.Cube019_Material017_0.geometry} material={materials['Material.017']} />
                </group>
                <group name="Cube020" position={[-96.107, 78.825, -363.398]} rotation={[-Math.PI / 2, 0, 0]} scale={[160.681, 73.933, 34.312]}>
                  <mesh name="Cube020_Material020_0" geometry={nodes.Cube020_Material020_0.geometry} material={materials['Material.074_2']} />
                </group>
                <group name="Cube021" position={[-108.064, 346.353, -354.981]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.187, 57.542, 10.785]}>
                  <mesh name="Cube021_Material018_0" geometry={nodes.Cube021_Material018_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube022" position={[-44.548, 344.359, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.513, 51.513, 10.165]}>
                  <mesh name="Cube022_Material017_0" geometry={nodes.Cube022_Material017_0.geometry} material={materials['Material.017']} />
                </group>
                <group name="Cube023" position={[93.781, 228.59, -355.282]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-11.991, -59.265, -117.81]}>
                  <mesh name="Cube023_Material021_0" geometry={nodes.Cube023_Material021_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube024" position={[-265.096, 291.702, -335.09]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.378, 55.458, 55.458]}>
                  <mesh name="Cube024_Material022_0" geometry={nodes.Cube024_Material022_0.geometry} material={materials['Material.074']} />
                </group>
                <group name="Cube025" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube025_Material023_0" geometry={nodes.Cube025_Material023_0.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cube026" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube026_Material024_0" geometry={nodes.Cube026_Material024_0.geometry} material={materials['Material.024']} />
                </group>
                <group name="Cube027" position={[-96.406, 270.963, -430.927]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.513, -10.916, -44.29]}>
                  <mesh name="Cube027_Material008_0" geometry={nodes.Cube027_Material008_0.geometry} material={materials['Material.074_6']} />
                </group>
                <group name="Cube028" position={[-95.71, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube028_Material026_0" geometry={nodes.Cube028_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube029" position={[-96.387, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.339, -46.663]}>
                  <mesh name="Cube029_Material025_0" geometry={nodes.Cube029_Material025_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube030" position={[-96.996, 270.963, -451.701]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube030_Material026_0" geometry={nodes.Cube030_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube031" position={[-103.687, 270.963, -430.927]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.513, -10.916, -44.29]}>
                  <mesh name="Cube031_Material008_0" geometry={nodes.Cube031_Material008_0.geometry} material={materials['Material.074_6']} />
                </group>
                <group name="Cube032" position={[-102.99, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube032_Material026_0" geometry={nodes.Cube032_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube033" position={[-103.667, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.339, -46.663]}>
                  <mesh name="Cube033_Material025_0" geometry={nodes.Cube033_Material025_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube034" position={[-104.276, 270.963, -451.701]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube034_Material026_0" geometry={nodes.Cube034_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube035" position={[-110.551, 270.963, -430.927]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.513, -10.916, -44.29]}>
                  <mesh name="Cube035_Material008_0" geometry={nodes.Cube035_Material008_0.geometry} material={materials['Material.074_6']} />
                </group>
                <group name="Cube036" position={[-109.854, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube036_Material026_0" geometry={nodes.Cube036_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube037" position={[-110.532, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.339, -46.663]}>
                  <mesh name="Cube037_Material025_0" geometry={nodes.Cube037_Material025_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube038" position={[-111.14, 270.963, -451.701]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube038_Material026_0" geometry={nodes.Cube038_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube039" position={[-117.502, 270.963, -430.927]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.513, -10.916, -44.29]}>
                  <mesh name="Cube039_Material008_0" geometry={nodes.Cube039_Material008_0.geometry} material={materials['Material.074_6']} />
                </group>
                <group name="Cube040" position={[-116.805, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube040_Material026_0" geometry={nodes.Cube040_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube041" position={[-117.483, 270.963, -432.409]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.339, -46.663]}>
                  <mesh name="Cube041_Material025_0" geometry={nodes.Cube041_Material025_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube042" position={[-118.091, 270.963, -451.701]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.051, -9.735, -44.411]}>
                  <mesh name="Cube042_Material026_0" geometry={nodes.Cube042_Material026_0.geometry} material={materials['Material.074_7']} />
                </group>
                <group name="Cube043" position={[-219.486, 85.339, -71.149]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.177, 29.278, 59.658]}>
                  <mesh name="Cube043_Material012_0" geometry={nodes.Cube043_Material012_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube044" position={[-219.486, 85.339, 671.433]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.177, 29.278, 59.658]}>
                  <mesh name="Cube044_Material012_0" geometry={nodes.Cube044_Material012_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube045" position={[-212.14, 79.399, -298.228]} rotation={[-Math.PI / 2, 0, 0]} scale={[35.476, 5.166, 20.568]}>
                  <mesh name="Cube045_Material027_0" geometry={nodes.Cube045_Material027_0.geometry} material={materials['Material.074_8']} />
                </group>
                <group name="Cube046" position={[-188.16, 268.516, -368.194]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.278, 42.446, 42.446]}>
                  <mesh name="Cube046_Material034_0" geometry={nodes.Cube046_Material034_0.geometry} material={materials['Material.034']} />
                </group>
                <group name="Cube047" position={[-134.664, 268.516, -368.194]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.278, 42.446, 42.446]}>
                  <mesh name="Cube047_Material033_0" geometry={nodes.Cube047_Material033_0.geometry} material={materials['Material.034']} />
                </group>
                <group name="Cube048" position={[-161.354, 268.242, -368.171]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.436, 39.405, 40.075]}>
                  <mesh name="Cube048_Material035_0" geometry={nodes.Cube048_Material035_0.geometry} material={materials['Material.074_15']} />
                </group>
                <group name="Cube049" position={[-161.354, 268.242, -368.171]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.436, 39.405, 40.075]}>
                  <mesh name="Cube049_Material040_0" geometry={nodes.Cube049_Material040_0.geometry} material={materials['Material.074_16']} />
                </group>
                <group name="Cube050" position={[-161.354, 268.242, -368.171]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.436, 39.405, 40.075]}>
                  <mesh name="Cube050_Material038_0" geometry={nodes.Cube050_Material038_0.geometry} material={materials['Material.074_16']} />
                </group>
                <group name="Cube051" position={[-161.354, 268.242, -368.171]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.436, 39.405, 40.075]}>
                  <mesh name="Cube051_Material042_0" geometry={nodes.Cube051_Material042_0.geometry} material={materials['Material.042']} />
                </group>
                <group name="Cube052" position={[83.515, 83.276, -355.599]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.75, 46.281, 28.867]}>
                  <mesh name="Cube052_Material047_0" geometry={nodes.Cube052_Material047_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube053" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube053_Material048_0" geometry={nodes.Cube053_Material048_0.geometry} material={materials['Material.048']} />
                </group>
                <group name="Cube054" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube054_Material049_0" geometry={nodes.Cube054_Material049_0.geometry} material={materials['Material.049']} />
                </group>
                <group name="Cube055" position={[-122.286, 185.076, -370.559]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.163, 54.534, 13.174]}>
                  <mesh name="Cube055_Material054_0" geometry={nodes.Cube055_Material054_0.geometry} material={materials['Material.054']} />
                </group>
                <group name="Cube056" position={[-127.222, 200.081, -370.559]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.059, 52.443, 12.669]}>
                  <mesh name="Cube056_Material061_0" geometry={nodes.Cube056_Material061_0.geometry} material={materials['Material.061']} />
                </group>
                <group name="Cube057" position={[-127.222, 200.081, -370.559]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.059, 52.443, 12.669]}>
                  <mesh name="Cube057_Material059_0" geometry={nodes.Cube057_Material059_0.geometry} material={materials['Material.074_22']} />
                </group>
                <group name="Cube058" position={[-122.591, 213.709, -370.429]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.259, 54.504, 0.809]}>
                  <mesh name="Cube058_Material063_0" geometry={nodes.Cube058_Material063_0.geometry} material={materials['Material.074_23']} />
                </group>
                <group name="Cube059" position={[-127.222, 200.081, -370.559]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.059, 52.443, 12.669]}>
                  <mesh name="Cube059_Material058_0" geometry={nodes.Cube059_Material058_0.geometry} material={materials['Material.058']} />
                </group>
                <group name="Cube060" position={[-123.744, 264.277, -316.795]} scale={[133.257, 53.22, 0.824]}>
                  <mesh name="Cube060_Material062_0" geometry={nodes.Cube060_Material062_0.geometry} material={materials['Material.062']} />
                </group>
                <group name="Cube061" position={[-122.286, 185.076, -370.559]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.163, 54.534, 13.174]}>
                  <mesh name="Cube061_Material064_0" geometry={nodes.Cube061_Material064_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube062" position={[-165.45, 224.123, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.374, -0.699, -106.434]}>
                  <mesh name="Cube062_Material065_0" geometry={nodes.Cube062_Material065_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube063" position={[111.413, 32.495, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube063_Material074_0" geometry={nodes.Cube063_Material074_0.geometry} material={materials['Material.074_25']} />
                </group>
                <group name="Cube064" position={[111.413, 32.447, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube064_Material074_0" geometry={nodes.Cube064_Material074_0.geometry} material={materials['Material.074_25']} />
                </group>
                <group name="Cube065" position={[111.413, 32.495, -27.406]} rotation={[-Math.PI / 2, 0.011, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube065_Material074_0" geometry={nodes.Cube065_Material074_0.geometry} material={materials['Material.074_25']} />
                </group>
                <group name="Cube066" position={[111.461, 32.287, -27.292]} rotation={[-Math.PI / 2, 0.011, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube066_Material076_0" geometry={nodes.Cube066_Material076_0.geometry} material={materials['Material.076']} />
                </group>
                <group name="Cube067" position={[111.413, 32.447, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube067_Material075_0" geometry={nodes.Cube067_Material075_0.geometry} material={materials['Material.075']} />
                </group>
                <group name="Cube068" position={[129.119, 44.5, -27.607]} rotation={[-Math.PI / 2, 0.284, 0]} scale={[5.964, 5.964, 2.081]}>
                  <mesh name="Cube068_Material092_0" geometry={nodes.Cube068_Material092_0.geometry} material={materials['Material.092']} />
                </group>
                <group name="Cube069" position={[111.413, 32.447, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -44.821, -22.902]}>
                  <mesh name="Cube069_Material093_0" geometry={nodes.Cube069_Material093_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube070" position={[-266.849, 260.335, -432.751]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.668, 2.324, 5.236]}>
                  <mesh name="Cube070_Material100_0" geometry={nodes.Cube070_Material100_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube071" position={[-266.849, 260.335, -426.843]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.668, 2.324, 5.236]}>
                  <mesh name="Cube071_Material101_0" geometry={nodes.Cube071_Material101_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube072" position={[111.413, 32.447, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube072_Material078_0" geometry={nodes.Cube072_Material078_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube073" position={[111.413, 32.447, -27.406]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube073_Material079_0" geometry={nodes.Cube073_Material079_0.geometry} material={materials['Material.074_6']} />
                </group>
                <group name="Cube074" position={[-92.944, 206.719, -314.862]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.642, 5.4, 4.234]}>
                  <mesh name="Cube074_Material084_0" geometry={nodes.Cube074_Material084_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube075" position={[-258.007, 195.512, -371.511]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.163, 52.435, 17.743]}>
                  <mesh name="Cube075_Material086_0" geometry={nodes.Cube075_Material086_0.geometry} material={materials['Material.074_26']} />
                </group>
                <group name="Cube076" position={[65.926, 34.461, -27.346]} rotation={[-Math.PI / 2, 0.234, Math.PI]} scale={[-42.887, -42.887, -22.902]}>
                  <mesh name="Cube076_Material080_0" geometry={nodes.Cube076_Material080_0.geometry} material={materials['Material.074_25']} />
                </group>
                <group name="Cube077" position={[-81.678, 266.506, -437.411]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.849, 4.872, 17.377]}>
                  <mesh name="Cube077_Material083_0" geometry={nodes.Cube077_Material083_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube078" position={[70.352, 334.375, -437.411]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.849, 4.872, 12.046]}>
                  <mesh name="Cube078_Material083_0" geometry={nodes.Cube078_Material083_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube079" position={[-269.84, 182.61, -338.408]} rotation={[-Math.PI / 2, 0, 0]} scale={[16.038, 9.162, 4.326]}>
                  <mesh name="Cube079_Material089_0" geometry={nodes.Cube079_Material089_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube080" position={[-158.493, 199.975, 375.163]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[16.038, 9.162, 4.326]}>
                  <mesh name="Cube080_Material089_0" geometry={nodes.Cube080_Material089_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube081" position={[93.215, 47.658, -27.747]} rotation={[-1.544, -0.233, 0]} scale={[2.623, 1.334, 2.237]}>
                  <mesh name="Cube081_Material090_0" geometry={nodes.Cube081_Material090_0.geometry} material={materials['Material.090']} />
                </group>
                <group name="Cube082" position={[-266.849, 274.042, -426.641]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.668, 2.324, 5.236]}>
                  <mesh name="Cube082_Material101_0" geometry={nodes.Cube082_Material101_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cube088" position={[98.958, 38.352, -8.162]} rotation={[-Math.PI / 2, -0.129, 0]} scale={[5.453, 4.946, 1.909]}>
                  <mesh name="Cube088_Material098_0" geometry={nodes.Cube088_Material098_0.geometry} material={materials['Material.098']} />
                </group>
                <group name="Cylinder" position={[74.209, 51.218, -262.894]} scale={[6.077, 6.275, 2.277]}>
                  <mesh name="Cylinder_Material009_0" geometry={nodes.Cylinder_Material009_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cylinder001" position={[-169.225, 114.406, -71.644]} rotation={[-Math.PI / 2, 1.554, 0]} scale={[19.4, 19.4, 2.506]}>
                  <mesh name="Cylinder001_Material028_0" geometry={nodes.Cylinder001_Material028_0.geometry} material={materials['Material.074_11']} />
                </group>
                <group name="Cylinder002" position={[-166.369, 70.647, -71.644]} rotation={[-Math.PI / 2, 1.536, 0]} scale={[10.298, 10.298, 1.33]}>
                  <mesh name="Cylinder002_Material029_0" geometry={nodes.Cylinder002_Material029_0.geometry} material={materials['Material.074_11']} />
                </group>
                <group name="Cylinder003" position={[-169.225, 114.406, 670.937]} rotation={[-Math.PI / 2, 1.554, 0]} scale={[19.4, 19.4, 2.506]}>
                  <mesh name="Cylinder003_Material031_0" geometry={nodes.Cylinder003_Material031_0.geometry} material={materials['Material.074_11']} />
                </group>
                <group name="Cylinder004" position={[-166.369, 70.647, 670.937]} rotation={[-Math.PI / 2, 1.536, 0]} scale={[10.298, 10.298, 1.33]}>
                  <mesh name="Cylinder004_Material030_0" geometry={nodes.Cylinder004_Material030_0.geometry} material={materials['Material.074_11']} />
                </group>
                <group name="Cylinder005" position={[-161.139, 268.658, -369.024]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[32.71, 32.71, 34.213]}>
                  <mesh name="Cylinder005_Material041_0" geometry={nodes.Cylinder005_Material041_0.geometry} material={materials['Material.074_17']} />
                </group>
                <group name="Cylinder006" position={[-209.451, 184.616, -370.096]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.354, 38.222, 10.575]}>
                  <mesh name="Cylinder006_Material050_0" geometry={nodes.Cylinder006_Material050_0.geometry} material={materials['Material.074_19']} />
                </group>
                <group name="Cylinder007" position={[-124.439, 184.616, -370.096]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.354, 38.222, 10.575]}>
                  <mesh name="Cylinder007_Material051_0" geometry={nodes.Cylinder007_Material051_0.geometry} material={materials['Material.074_20']} />
                </group>
                <group name="Cylinder008" position={[-37.777, 184.616, -370.096]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.354, 38.222, 10.575]}>
                  <mesh name="Cylinder008_Material052_0" geometry={nodes.Cylinder008_Material052_0.geometry} material={materials['Material.074_19']} />
                </group>
                <group name="Cylinder009" position={[77.222, 34.525, -28.482]} rotation={[0, -0.001, 0]} scale={[11.574, 11.574, 2.501]}>
                  <mesh name="Cylinder009_Material081_0" geometry={nodes.Cylinder009_Material081_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Cylinder010" position={[77.222, 34.525, -27.858]} rotation={[0, -0.001, 0]} scale={[11.891, 11.891, 0.393]}>
                  <mesh name="Cylinder010_Material077_0" geometry={nodes.Cylinder010_Material077_0.geometry} material={materials['Material.077']} />
                </group>
                <group name="Cylinder011" position={[-173.934, 242.501, -421.74]} rotation={[0.474, 0, Math.PI]} scale={[2.055, 2.055, 16.973]}>
                  <mesh name="Cylinder011_Material045_0" geometry={nodes.Cylinder011_Material045_0.geometry} material={materials['Material.045']} />
                </group>
                <group name="Cylinder012" position={[77.223, 34.525, -28.709]} rotation={[0, -0.001, 0]} scale={[10.438, 10.438, 2.868]}>
                  <mesh name="Cylinder012_Material082_0" geometry={nodes.Cylinder012_Material082_0.geometry} material={materials['Material.082']} />
                </group>
                <group name="Cylinder013" position={[83.027, 308.225, -282.193]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[9.856, 9.856, 4.879]}>
                  <mesh name="Cylinder013_Material094_0" geometry={nodes.Cylinder013_Material094_0.geometry} material={materials['Material.094']} />
                </group>
                <group name="Cylinder014" position={[84.52, 280.424, -282.193]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[6.544, 6.544, 3.239]}>
                  <mesh name="Cylinder014_Material095_0" geometry={nodes.Cylinder014_Material095_0.geometry} material={materials['Material.088']} />
                </group>
                <group name="Cylinder015" position={[84.52, 254.307, -282.193]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[6.67, 6.67, 3.302]}>
                  <mesh name="Cylinder015_Material096_0" geometry={nodes.Cylinder015_Material096_0.geometry} material={materials['Material.088']} />
                </group>
                <group name="Cylinder016" position={[-263.633, 248.737, -421.76]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[3.07, 3.07, 5.454]}>
                  <mesh name="Cylinder016_Material102_0" geometry={nodes.Cylinder016_Material102_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="gallerymodel" position={[-142.04, 164.813, 596.081]} rotation={[0.441, -1.284, 0.441]} scale={80.689}>
                  <mesh name="gallerymodel_gallerymodel_0" geometry={nodes.gallerymodel_gallerymodel_0.geometry} material={materials['Material.074_28']} />
                </group>
                <group name="geforcertx" position={[-229.271, 204.826, -315.957]} scale={[10.377, 10.377, 10.91]}>
                  <mesh name="geforcertx_Material056_0" geometry={nodes.geforcertx_Material056_0.geometry} material={materials['Material.056']} />
                </group>
                <group name="gigabyte-logo" position={[-161.543, 449.447, 82.082]} rotation={[1.571, -1.501, 1.571]} scale={23.689}>
                  <mesh name="gigabyte-logo_gigabyte-logo_0" geometry={nodes['gigabyte-logo_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} />
                </group>
                <group name="gigabyte-logo001" position={[-122.059, 122.824, 301.598]} rotation={[-Math.PI / 2, 1.501, Math.PI / 2]} scale={17.84}>
                  <mesh name="gigabyte-logo001_gigabyte-logo_0" geometry={nodes['gigabyte-logo001_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} />
                </group>
                <group name="IOSHIELD" position={[-259.689, 284.799, -422.491]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[26.475, 30.855, 31.832]}>
                  <mesh name="IOSHIELD_IOSHIELD_0" geometry={nodes.IOSHIELD_IOSHIELD_0.geometry} material={materials['Material.074_3']} />
                </group>
                <group name="maxresdefault_(1)" position={[87.714, 83.615, -355.312]} rotation={[0, 1.571, 0]} scale={39.411}>
                  <mesh name="maxresdefault_(1)_maxresdefault_(1)_0" geometry={nodes['maxresdefault_(1)_maxresdefault_(1)_0'].geometry} material={materials['Material.074_10']} />
                </group>
                <group name="metal-mesh-500x500" position={[-42.312, 356.984, -354.163]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[100, 133.704, 100]}>
                  <mesh name="metal-mesh-500x500_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
                </group>
                <group name="metal-mesh-500x500001" position={[-174.205, 356.984, -354.163]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[100, 133.705, 100]}>
                  <mesh name="metal-mesh-500x500001_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500001_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
                </group>
                <group name="metal-mesh-500x500002" position={[-270.9, 291.514, -335.328]} rotation={[0, -Math.PI / 2, 0]} scale={[79.555, 106.369, 79.555]}>
                  <mesh name="metal-mesh-500x500002_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500002_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
                </group>
                <group name="metal-mesh-500x500003" position={[-257.977, 182.039, -359.049]} rotation={[0, -Math.PI / 2, 0]} scale={[109.082, 106.369, 79.555]}>
                  <mesh name="metal-mesh-500x500003_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500003_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
                </group>
                <group name="metal-mesh-500x500004" position={[-257.977, 220.723, -359.05]} rotation={[0, -Math.PI / 2, 0]} scale={[109.082, 106.369, 79.555]}>
                  <mesh name="metal-mesh-500x500004_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500004_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
                </group>
                <group name="MOBOAORUSORANGETRANS" position={[-235.591, 287.747, -423.919]} rotation={[0, 0, 0.651]} scale={6.343}>
                  <mesh name="MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0" geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry} material={materials['Material.074_4']} />
                </group>
                <group name="MY_SCREEN" position={[-136.177, 300.132, 300.405]} rotation={[-Math.PI / 2, 1.501, Math.PI / 2]} scale={[331.621, 348.065, 331.621]}>
                  <mesh name="MY_SCREEN_MY_SCREEN_0" geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry} material={materials['Material.074_30']} />
                </group>
                <group name="NVIDIA_LOGO" position={[0.586, 70.428, -289.066]} scale={45.189}>
                  <mesh name="NVIDIA_LOGO_NVIDIA_LOGO_0" geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry} material={materials['Material.074_12']} />
                </group>
                <group name="Object_10" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_10_Tastatur_Unterseite_0" geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} />
                </group>
                <group name="Object_101" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_101_Material067_0" geometry={nodes.Object_101_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_103" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_103_Material070_0" geometry={nodes.Object_103_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_105" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_105_Tasten_2_0" geometry={nodes.Object_105_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_107" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_107_Material070_0" geometry={nodes.Object_107_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_109" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_109_Material069_0" geometry={nodes.Object_109_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_111" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_111_Material067_0" geometry={nodes.Object_111_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_113" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_113_Material068_0" geometry={nodes.Object_113_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_115" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_115_Material057_0" geometry={nodes.Object_115_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_117" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_117_Material068_0" geometry={nodes.Object_117_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_119" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_119_Material057_0" geometry={nodes.Object_119_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_12" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_12_Tastatur_Unterseite_0" geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} />
                </group>
                <group name="Object_121" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_121_Material066_0" geometry={nodes.Object_121_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_123" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_123_Material057_0" geometry={nodes.Object_123_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_125" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_125_Material066_0" geometry={nodes.Object_125_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_127" position={[147.709, 32.601, 400.77]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[154.135, 91.415, 91.415]}>
                  <mesh name="Object_127_Material057_0" geometry={nodes.Object_127_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_129" position={[147.709, 32.601, 385.792]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_129_Material066_0" geometry={nodes.Object_129_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_131" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_131_Material060_0" geometry={nodes.Object_131_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_133" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_133_Material060_0" geometry={nodes.Object_133_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_135" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_135_Material060_0" geometry={nodes.Object_135_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_137" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_137_Material005_0" geometry={nodes.Object_137_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_139" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_139_Material005_0" geometry={nodes.Object_139_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_14" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_14_Material004_0" geometry={nodes.Object_14_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_141" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_141_Material069_0" geometry={nodes.Object_141_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_143" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_143_Material068_0" geometry={nodes.Object_143_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_145" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_145_Material066_0" geometry={nodes.Object_145_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_147" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_147_Material066_0" geometry={nodes.Object_147_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_149" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_149_Material005_0" geometry={nodes.Object_149_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_151" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_151_Material068_0" geometry={nodes.Object_151_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_153" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_153_Material066_0" geometry={nodes.Object_153_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_155" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_155_Material068_0" geometry={nodes.Object_155_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_157" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_157_Material066_0" geometry={nodes.Object_157_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_159" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_159_Material066_0" geometry={nodes.Object_159_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_16" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_16_Material004_0" geometry={nodes.Object_16_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_161" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_161_Material066_0" geometry={nodes.Object_161_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_163" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_163_Material066_0" geometry={nodes.Object_163_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_165" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_165_Material066_0" geometry={nodes.Object_165_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_167" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_167_Material060_0" geometry={nodes.Object_167_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_169" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_169_Material060_0" geometry={nodes.Object_169_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_171" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_171_Material005_0" geometry={nodes.Object_171_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_173" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_173_Material057_0" geometry={nodes.Object_173_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_175" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_175_Material069_0" geometry={nodes.Object_175_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_177" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_177_Material068_0" geometry={nodes.Object_177_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_179" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_179_Material060_0" geometry={nodes.Object_179_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_18" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_18_Material004_0" geometry={nodes.Object_18_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_181" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_181_Material057_0" geometry={nodes.Object_181_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_183" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_183_Material070_0" geometry={nodes.Object_183_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_185" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_185_Material057_0" geometry={nodes.Object_185_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_187" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_187_Material057_0" geometry={nodes.Object_187_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_189" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_189_Material069_0" geometry={nodes.Object_189_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_191" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_191_Material057_0" geometry={nodes.Object_191_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_193" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_193_Material057_0" geometry={nodes.Object_193_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_195" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_195_Material057_0" geometry={nodes.Object_195_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_197" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_197_Material057_0" geometry={nodes.Object_197_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_199" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_199_Material057_0" geometry={nodes.Object_199_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_20" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_20_Material004_0" geometry={nodes.Object_20_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_201" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_201_Material057_0" geometry={nodes.Object_201_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_203" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_203_Material060_0" geometry={nodes.Object_203_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_205" position={[147.709, 32.578, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_205_Material066_0" geometry={nodes.Object_205_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_207" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_207_Material057_0" geometry={nodes.Object_207_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_209" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_209_Material070_0" geometry={nodes.Object_209_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_211" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_211_Material067_0" geometry={nodes.Object_211_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_213" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_213_Tasten_2_0" geometry={nodes.Object_213_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_215" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_215_Material057_0" geometry={nodes.Object_215_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_217" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_217_Material060_0" geometry={nodes.Object_217_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_219" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_219_Material060_0" geometry={nodes.Object_219_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_22" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_22_Material004_0" geometry={nodes.Object_22_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_221" position={[147.709, 32.601, 400.77]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[154.135, 91.415, 91.415]}>
                  <mesh name="Object_221_Material057_0" geometry={nodes.Object_221_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_223" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_223_Material005_0" geometry={nodes.Object_223_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_225" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_225_Material005_0" geometry={nodes.Object_225_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_227" position={[147.709, 32.432, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_227_Material069_0" geometry={nodes.Object_227_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_229" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_229_Material057_0" geometry={nodes.Object_229_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_231" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_231_Material068_0" geometry={nodes.Object_231_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_233" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_233_Material057_0" geometry={nodes.Object_233_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_235" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_235_Material057_0" geometry={nodes.Object_235_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_237" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_237_Material066_0" geometry={nodes.Object_237_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_239" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_239_Material066_0" geometry={nodes.Object_239_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_24" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_24_Tastatur_Seite_0" geometry={nodes.Object_24_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_241" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_241_Material070_0" geometry={nodes.Object_241_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_243" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_243_Material066_0" geometry={nodes.Object_243_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_245" position={[147.709, 32.601, 289.941]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[142.89, 91.415, 91.415]}>
                  <mesh name="Object_245_Material070_0" geometry={nodes.Object_245_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_247" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_247_Material066_0" geometry={nodes.Object_247_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_249" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_249_Material060_0" geometry={nodes.Object_249_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_251" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_251_Material070_0" geometry={nodes.Object_251_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_253" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_253_Material057_0" geometry={nodes.Object_253_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_255" position={[129.141, 32.601, 395.134]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[79.314, 91.415, 91.415]}>
                  <mesh name="Object_255_Material057_0" geometry={nodes.Object_255_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_257" position={[129.141, 32.601, 395.134]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[79.314, 91.415, 91.415]}>
                  <mesh name="Object_257_Material057_0" geometry={nodes.Object_257_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_259" position={[147.709, 32.601, 385.749]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_259_Material060_0" geometry={nodes.Object_259_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_26" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_26_Material004_0" geometry={nodes.Object_26_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_261" position={[147.709, 32.601, 385.718]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_261_Material060_0" geometry={nodes.Object_261_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_263" position={[147.709, 32.601, 385.526]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_263_Material060_0" geometry={nodes.Object_263_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_265" position={[125.985, 34.792, 402.731]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_265_Material060_0" geometry={nodes.Object_265_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_267" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_267_Tasten_2_0" geometry={nodes.Object_267_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_269" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_269_Material070_0" geometry={nodes.Object_269_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_271" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_271_Material070_0" geometry={nodes.Object_271_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_273" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_273_Material067_0" geometry={nodes.Object_273_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_275" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_275_Material005_0" geometry={nodes.Object_275_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_277" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_277_Tasten_2_0" geometry={nodes.Object_277_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_279" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_279_Tasten_2_0" geometry={nodes.Object_279_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_28" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_28_Material004_0" geometry={nodes.Object_28_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_281" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_281_Material069_0" geometry={nodes.Object_281_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_283" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_283_Material068_0" geometry={nodes.Object_283_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_285" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_285_Material068_0" geometry={nodes.Object_285_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_287" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_287_Tasten_2_0" geometry={nodes.Object_287_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_289" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_289_Material068_0" geometry={nodes.Object_289_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_291" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_291_Material066_0" geometry={nodes.Object_291_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_293" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_293_Material066_0" geometry={nodes.Object_293_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_295" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_295_Tasten_2_0" geometry={nodes.Object_295_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_297" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_297_Material067_0" geometry={nodes.Object_297_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_299" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_299_Material066_0" geometry={nodes.Object_299_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_30" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_30_Material007_0" geometry={nodes.Object_30_Material007_0.geometry} material={materials['Material.007']} />
                </group>
                <group name="Object_301" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_301_Material060_0" geometry={nodes.Object_301_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_303" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_303_Tasten_2_0" geometry={nodes.Object_303_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_305" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_305_Material060_0" geometry={nodes.Object_305_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_307" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_307_Tasten_2_0" geometry={nodes.Object_307_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_309" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_309_Material057_0" geometry={nodes.Object_309_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_311" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_311_Tasten_2_0" geometry={nodes.Object_311_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_313" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_313_Tasten_2_0" geometry={nodes.Object_313_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_315" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_315_Material005_0" geometry={nodes.Object_315_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_317" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_317_Tasten_2_0" geometry={nodes.Object_317_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_319" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_319_Tasten_2_0" geometry={nodes.Object_319_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_32" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_32_Material004_0" geometry={nodes.Object_32_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_321" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_321_Material068_0" geometry={nodes.Object_321_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_323" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_323_Material057_0" geometry={nodes.Object_323_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_325" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_325_Material066_0" geometry={nodes.Object_325_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_327" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_327_Material057_0" geometry={nodes.Object_327_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_329" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_329_Material066_0" geometry={nodes.Object_329_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_331" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_331_Material060_0" geometry={nodes.Object_331_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_333" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_333_Material060_0" geometry={nodes.Object_333_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_335" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_335_Material005_0" geometry={nodes.Object_335_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_337" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_337_Material068_0" geometry={nodes.Object_337_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_339" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_339_Material066_0" geometry={nodes.Object_339_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_34" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_34_Material004_0" geometry={nodes.Object_34_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Object_341" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_341_Material068_0" geometry={nodes.Object_341_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_343" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_343_Material066_0" geometry={nodes.Object_343_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_345" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_345_Material066_0" geometry={nodes.Object_345_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_347" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_347_Material066_0" geometry={nodes.Object_347_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_349" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_349_Material066_0" geometry={nodes.Object_349_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_351" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_351_Material060_0" geometry={nodes.Object_351_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_353" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_353_Material060_0" geometry={nodes.Object_353_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_355" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_355_Material057_0" geometry={nodes.Object_355_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_357" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_357_Material069_0" geometry={nodes.Object_357_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_359" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_359_Material066_0" geometry={nodes.Object_359_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_36" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_36_Tastatur_Seite_0" geometry={nodes.Object_36_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_361" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_361_Material057_0" geometry={nodes.Object_361_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_363" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_363_Material057_0" geometry={nodes.Object_363_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_365" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_365_Material057_0" geometry={nodes.Object_365_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_367" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_367_Material069_0" geometry={nodes.Object_367_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_369" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_369_Material060_0" geometry={nodes.Object_369_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_371" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_371_Material070_0" geometry={nodes.Object_371_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_373" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_373_Material070_0" geometry={nodes.Object_373_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_375" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_375_Material067_0" geometry={nodes.Object_375_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_377" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_377_Tasten_2_0" geometry={nodes.Object_377_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_379" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_379_Material066_0" geometry={nodes.Object_379_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_38" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_38_Tastatur_Seite_0" geometry={nodes.Object_38_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_381" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_381_Material005_0" geometry={nodes.Object_381_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_383" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_383_Material005_0" geometry={nodes.Object_383_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_385" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_385_Material069_0" geometry={nodes.Object_385_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_387" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_387_Material005_0" geometry={nodes.Object_387_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_389" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_389_Material068_0" geometry={nodes.Object_389_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_391" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_391_Material057_0" geometry={nodes.Object_391_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_393" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_393_Material068_0" geometry={nodes.Object_393_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_395" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_395_Material057_0" geometry={nodes.Object_395_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_397" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_397_Material066_0" geometry={nodes.Object_397_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_399" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_399_Material066_0" geometry={nodes.Object_399_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_40" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_40_Tastatur_Seite_0" geometry={nodes.Object_40_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_401" position={[147.709, 32.601, 289.941]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[142.89, 91.415, 91.415]}>
                  <mesh name="Object_401_Material070_0" geometry={nodes.Object_401_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_403" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_403_Material066_0" geometry={nodes.Object_403_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_405" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_405_Material060_0" geometry={nodes.Object_405_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_407" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_407_Material070_0" geometry={nodes.Object_407_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_409" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_409_Material067_0" geometry={nodes.Object_409_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_411" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_411_Tasten_2_0" geometry={nodes.Object_411_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_413" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_413_Material066_0" geometry={nodes.Object_413_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_415" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_415_Material057_0" geometry={nodes.Object_415_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_418" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_418_Tasten_0" geometry={nodes.Object_418_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_42" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_42_Tastatur_Seite_0" geometry={nodes.Object_42_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_420" position={[164.917, 31.114, 386.964]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[67.569, 91.415, 91.415]}>
                  <mesh name="Object_420_Tasten_0" geometry={nodes.Object_420_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_422" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_422_Tasten_0" geometry={nodes.Object_422_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_424" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_424_Tasten_0" geometry={nodes.Object_424_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_426" position={[130.241, 34.605, 390.577]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[72.766, 91.415, 91.415]}>
                  <mesh name="Object_426_Tasten_0" geometry={nodes.Object_426_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_428" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_428_Tasten_0" geometry={nodes.Object_428_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_430" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_430_Tasten_0" geometry={nodes.Object_430_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_432" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_432_Tasten_0" geometry={nodes.Object_432_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_434" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_434_Tasten_0" geometry={nodes.Object_434_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_436" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_436_Tasten_0" geometry={nodes.Object_436_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_438" position={[147.709, 34.605, 402.928]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_438_Tasten_0" geometry={nodes.Object_438_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_44" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_44_Tastatur_Seite_0" geometry={nodes.Object_44_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_440" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_440_Tasten_0" geometry={nodes.Object_440_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_442" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_442_Tasten_0" geometry={nodes.Object_442_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_444" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_444_Tasten_0" geometry={nodes.Object_444_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_446" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_446_Tasten_0" geometry={nodes.Object_446_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_448" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_448_Tasten_0" geometry={nodes.Object_448_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_450" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_450_Tasten_0" geometry={nodes.Object_450_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_452" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_452_Tasten_0" geometry={nodes.Object_452_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_454" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_454_Tasten_0" geometry={nodes.Object_454_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_456" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_456_Tasten_0" geometry={nodes.Object_456_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_458" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_458_Tasten_0" geometry={nodes.Object_458_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_460" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_460_Tasten_0" geometry={nodes.Object_460_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_462" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_462_Tasten_0" geometry={nodes.Object_462_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_464" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_464_Tasten_0" geometry={nodes.Object_464_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_466" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_466_Tasten_0" geometry={nodes.Object_466_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_468" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_468_Tasten_0" geometry={nodes.Object_468_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_47" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_47_Material005_0" geometry={nodes.Object_47_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_470" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_470_Tasten_0" geometry={nodes.Object_470_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_472" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_472_Tasten_0" geometry={nodes.Object_472_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_474" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_474_Tasten_0" geometry={nodes.Object_474_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_476" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_476_Tasten_0" geometry={nodes.Object_476_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_478" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_478_Tasten_0" geometry={nodes.Object_478_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_480" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_480_Tasten_0" geometry={nodes.Object_480_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_482" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_482_Tasten_0" geometry={nodes.Object_482_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_484" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_484_Tasten_0" geometry={nodes.Object_484_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_486" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_486_Tasten_0" geometry={nodes.Object_486_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_488" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_488_Tasten_0" geometry={nodes.Object_488_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_49" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_49_Tasten_2_0" geometry={nodes.Object_49_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_490" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_490_Tasten_0" geometry={nodes.Object_490_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_492" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_492_Tasten_0" geometry={nodes.Object_492_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_494" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_494_Tasten_0" geometry={nodes.Object_494_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_496" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_496_Tasten_0" geometry={nodes.Object_496_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_498" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_498_Tasten_0" geometry={nodes.Object_498_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_500" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_500_Tasten_0" geometry={nodes.Object_500_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_502" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_502_Tasten_0" geometry={nodes.Object_502_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_504" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_504_Tasten_0" geometry={nodes.Object_504_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_506" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_506_Tasten_0" geometry={nodes.Object_506_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_508" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_508_Tasten_0" geometry={nodes.Object_508_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_51" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_51_Tasten_2_0" geometry={nodes.Object_51_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_510" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_510_Tasten_0" geometry={nodes.Object_510_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_512" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_512_Tasten_0" geometry={nodes.Object_512_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_514" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_514_Tasten_0" geometry={nodes.Object_514_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_516" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_516_Tasten_0" geometry={nodes.Object_516_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_518" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_518_Tasten_0" geometry={nodes.Object_518_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_520" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_520_Tasten_0" geometry={nodes.Object_520_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_522" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_522_Tasten_0" geometry={nodes.Object_522_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_524" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_524_Tasten_0" geometry={nodes.Object_524_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_526" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_526_Tasten_0" geometry={nodes.Object_526_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_528" position={[147.709, 34.605, 385.856]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_528_Tasten_0" geometry={nodes.Object_528_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_53" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_53_Tasten_2_0" geometry={nodes.Object_53_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_530" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_530_Tasten_0" geometry={nodes.Object_530_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_532" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_532_Tasten_0" geometry={nodes.Object_532_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_534" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_534_Tasten_0" geometry={nodes.Object_534_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_536" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_536_Tasten_0" geometry={nodes.Object_536_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_538" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_538_Tasten_0" geometry={nodes.Object_538_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_540" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_540_Tasten_0" geometry={nodes.Object_540_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_542" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_542_Tasten_0" geometry={nodes.Object_542_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_544" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_544_Tasten_0" geometry={nodes.Object_544_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_546" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_546_Tasten_0" geometry={nodes.Object_546_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_548" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_548_Tasten_0" geometry={nodes.Object_548_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_55" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_55_Material057_0" geometry={nodes.Object_55_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_550" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_550_Tasten_0" geometry={nodes.Object_550_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_552" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_552_Tasten_0" geometry={nodes.Object_552_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_554" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_554_Tasten_0" geometry={nodes.Object_554_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_556" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_556_Tasten_0" geometry={nodes.Object_556_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_558" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_558_Tasten_0" geometry={nodes.Object_558_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_560" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_560_Tasten_0" geometry={nodes.Object_560_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_562" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_562_Tasten_0" geometry={nodes.Object_562_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_564" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_564_Tasten_0" geometry={nodes.Object_564_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_566" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_566_Tasten_0" geometry={nodes.Object_566_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_568" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_568_Tasten_0" geometry={nodes.Object_568_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_57" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_57_Tasten_2_0" geometry={nodes.Object_57_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_570" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_570_Tasten_0" geometry={nodes.Object_570_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_572" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_572_Tasten_0" geometry={nodes.Object_572_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_574" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_574_Tasten_0" geometry={nodes.Object_574_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_576" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_576_Tasten_0" geometry={nodes.Object_576_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_578" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_578_Tasten_0" geometry={nodes.Object_578_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_580" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_580_Tasten_0" geometry={nodes.Object_580_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_582" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_582_Tasten_0" geometry={nodes.Object_582_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_584" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_584_Tasten_0" geometry={nodes.Object_584_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_586" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_586_Tasten_0" geometry={nodes.Object_586_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_588" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_588_Tasten_0" geometry={nodes.Object_588_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_59" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_59_Material060_0" geometry={nodes.Object_59_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_590" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_590_Tasten_0" geometry={nodes.Object_590_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_592" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_592_Tasten_0" geometry={nodes.Object_592_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_594" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_594_Tasten_0" geometry={nodes.Object_594_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_596" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_596_Tasten_0" geometry={nodes.Object_596_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_598" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_598_Tasten_0" geometry={nodes.Object_598_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_600" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_600_Tasten_0" geometry={nodes.Object_600_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_602" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_602_Tasten_0" geometry={nodes.Object_602_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_604" position={[147.709, 34.581, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_604_Material071_0" geometry={nodes.Object_604_Material071_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_606" position={[147.709, 34.296, 259.275]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={[157.896, 91.415, 91.415]}>
                  <mesh name="Object_606_Tasten_0" geometry={nodes.Object_606_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_608" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_608_Tasten_0" geometry={nodes.Object_608_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_61" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_61_Tasten_2_0" geometry={nodes.Object_61_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_610" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_610_Tasten_0" geometry={nodes.Object_610_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_612" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_612_Tasten_0" geometry={nodes.Object_612_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_614" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_614_Tasten_0" geometry={nodes.Object_614_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_616" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_616_Tasten_0" geometry={nodes.Object_616_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_618" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_618_Tasten_0" geometry={nodes.Object_618_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_620" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_620_Tasten_0" geometry={nodes.Object_620_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_622" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_622_Tasten_0" geometry={nodes.Object_622_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_624" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_624_Tasten_0" geometry={nodes.Object_624_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_626" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_626_Tasten_0" geometry={nodes.Object_626_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_628" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_628_Tasten_0" geometry={nodes.Object_628_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_63" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_63_Material060_0" geometry={nodes.Object_63_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
                <group name="Object_630" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_630_Tasten_0" geometry={nodes.Object_630_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_632" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_632_Tasten_0" geometry={nodes.Object_632_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_634" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_634_Tasten_0" geometry={nodes.Object_634_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_636" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_636_Tasten_0" geometry={nodes.Object_636_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_638" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_638_Tasten_0" geometry={nodes.Object_638_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_640" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_640_Tasten_0" geometry={nodes.Object_640_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_642" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_642_Tasten_0" geometry={nodes.Object_642_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_644" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_644_Tasten_0" geometry={nodes.Object_644_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_646" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_646_Tasten_0" geometry={nodes.Object_646_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_648" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_648_Tasten_0" geometry={nodes.Object_648_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_65" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_65_Material066_0" geometry={nodes.Object_65_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_650" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_650_Tasten_0" geometry={nodes.Object_650_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_652" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_652_Tasten_0" geometry={nodes.Object_652_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_654" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_654_Tasten_0" geometry={nodes.Object_654_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_656" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_656_Tasten_0" geometry={nodes.Object_656_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_658" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_658_Tasten_0" geometry={nodes.Object_658_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_660" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_660_Tasten_0" geometry={nodes.Object_660_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_662" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_662_Tasten_0" geometry={nodes.Object_662_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_664" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_664_Tasten_0" geometry={nodes.Object_664_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_666" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_666_Tasten_0" geometry={nodes.Object_666_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_668" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_668_Tasten_0" geometry={nodes.Object_668_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_67" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_67_Material067_0" geometry={nodes.Object_67_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_670" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_670_Tasten_0" geometry={nodes.Object_670_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_672" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_672_Tasten_0" geometry={nodes.Object_672_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_674" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_674_Tasten_0" geometry={nodes.Object_674_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_676" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_676_Tasten_0" geometry={nodes.Object_676_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_678" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_678_Tasten_0" geometry={nodes.Object_678_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_680" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_680_Tasten_0" geometry={nodes.Object_680_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_682" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_682_Tasten_0" geometry={nodes.Object_682_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_684" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_684_Tasten_0" geometry={nodes.Object_684_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_686" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_686_Tasten_0" geometry={nodes.Object_686_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_688" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_688_Tasten_0" geometry={nodes.Object_688_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_69" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_69_Material066_0" geometry={nodes.Object_69_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_690" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_690_Tasten_0" geometry={nodes.Object_690_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_692" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_692_Tasten_0" geometry={nodes.Object_692_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_694" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_694_Tasten_0" geometry={nodes.Object_694_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_696" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_696_Tasten_0" geometry={nodes.Object_696_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_698" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_698_Tasten_0" geometry={nodes.Object_698_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_700" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_700_Tasten_0" geometry={nodes.Object_700_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_702" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_702_Tasten_0" geometry={nodes.Object_702_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_704" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_704_Tasten_0" geometry={nodes.Object_704_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_706" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_706_Tasten_0" geometry={nodes.Object_706_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_708" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_708_Tasten_0" geometry={nodes.Object_708_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_71" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_71_Tasten_2_0" geometry={nodes.Object_71_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_710" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_710_Tasten_0" geometry={nodes.Object_710_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_712" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_712_Tasten_0" geometry={nodes.Object_712_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_714" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_714_Tasten_0" geometry={nodes.Object_714_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_716" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_716_Tasten_0" geometry={nodes.Object_716_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_718" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_718_Tasten_0" geometry={nodes.Object_718_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_720" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_720_Tasten_0" geometry={nodes.Object_720_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_722" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_722_Tasten_0" geometry={nodes.Object_722_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_724" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_724_Tasten_0" geometry={nodes.Object_724_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_726" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_726_Tasten_0" geometry={nodes.Object_726_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_728" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_728_Tasten_0" geometry={nodes.Object_728_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_73" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_73_Material057_0" geometry={nodes.Object_73_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_730" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_730_Tasten_0" geometry={nodes.Object_730_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_732" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_732_Tasten_0" geometry={nodes.Object_732_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_734" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_734_Tasten_0" geometry={nodes.Object_734_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_736" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_736_Tasten_0" geometry={nodes.Object_736_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_738" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_738_Tasten_0" geometry={nodes.Object_738_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_740" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_740_Tasten_0" geometry={nodes.Object_740_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_742" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_742_Tasten_0" geometry={nodes.Object_742_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_744" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_744_Tasten_0" geometry={nodes.Object_744_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_746" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_746_Tasten_0" geometry={nodes.Object_746_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_748" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_748_Tasten_0" geometry={nodes.Object_748_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_75" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_75_Material066_0" geometry={nodes.Object_75_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
                <group name="Object_750" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_750_Tasten_0" geometry={nodes.Object_750_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_752" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_752_Tasten_0" geometry={nodes.Object_752_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_754" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_754_Tasten_0" geometry={nodes.Object_754_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_756" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_756_Tasten_0" geometry={nodes.Object_756_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_758" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_758_Tasten_0" geometry={nodes.Object_758_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_760" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_760_Tasten_0" geometry={nodes.Object_760_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_762" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_762_Tasten_0" geometry={nodes.Object_762_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_764" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_764_Tasten_0" geometry={nodes.Object_764_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_766" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_766_Tasten_0" geometry={nodes.Object_766_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_768" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_768_Tasten_0" geometry={nodes.Object_768_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_77" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_77_Material057_0" geometry={nodes.Object_77_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_770" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_770_Tasten_0" geometry={nodes.Object_770_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_772" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_772_Tasten_0" geometry={nodes.Object_772_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_774" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_774_Tasten_0" geometry={nodes.Object_774_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_776" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_776_Tasten_0" geometry={nodes.Object_776_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_778" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_778_Tasten_0" geometry={nodes.Object_778_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_780" position={[147.709, 34.605, 403.086]} rotation={[-Math.PI / 2, -1.481, 1.571]} scale={91.415}>
                  <mesh name="Object_780_Tasten_0" geometry={nodes.Object_780_Tasten_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Object_784" position={[174.161, 46.923, 307.714]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={49.824}>
                  <mesh name="Object_784_Material057_0" geometry={nodes.Object_784_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_786" position={[191.377, 45.228, 324.985]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={49.824}>
                  <mesh name="Object_786_Material057_0" geometry={nodes.Object_786_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_79" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_79_Material057_0" geometry={nodes.Object_79_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_790" position={[191.377, 45.228, 290.099]} rotation={[-Math.PI / 2, 0, 0]} scale={49.824}>
                  <mesh name="Object_790_Material057_0" geometry={nodes.Object_790_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_792" position={[190.941, 45.228, 307.684]} rotation={[-Math.PI / 2, 0, -1.538]} scale={52.612}>
                  <mesh name="Object_792_Material057_0" geometry={nodes.Object_792_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
                <group name="Object_794" position={[139.381, 50.46, 591.26]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={29.266}>
                  <mesh name="Object_794_Material070_0" geometry={nodes.Object_794_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_796" position={[141.108, 50.46, 586.29]} rotation={[-Math.PI / 2, 0, 0]} scale={29.266}>
                  <mesh name="Object_796_Material070_0" geometry={nodes.Object_796_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
                <group name="Object_8" position={[147.709, 33.245, 403.086]} rotation={[-Math.PI, -1.571, 0]} scale={91.415}>
                  <mesh name="Object_8_Tastatur_Seite_0" geometry={nodes.Object_8_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
                </group>
                <group name="Object_81" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_81_Material068_0" geometry={nodes.Object_81_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_83" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_83_Tasten_2_0" geometry={nodes.Object_83_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_85" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_85_Material068_0" geometry={nodes.Object_85_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_87" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_87_Tasten_2_0" geometry={nodes.Object_87_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_89" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_89_Material068_0" geometry={nodes.Object_89_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
                <group name="Object_91" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_91_Material067_0" geometry={nodes.Object_91_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
                <group name="Object_93" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_93_Material069_0" geometry={nodes.Object_93_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
                <group name="Object_95" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_95_Tasten_2_0" geometry={nodes.Object_95_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="Object_97" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_97_Material005_0" geometry={nodes.Object_97_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
                <group name="Object_99" position={[147.709, 32.601, 403.086]} rotation={[-Math.PI / 2, -1.481, Math.PI / 2]} scale={91.415}>
                  <mesh name="Object_99_Tasten_2_0" geometry={nodes.Object_99_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
                <group name="OnTheFly-bg_422" position={[101.601, 40.622, 244.007]} rotation={[-Math.PI / 2, 0.078, Math.PI / 2]} scale={21.893}>
                  <group name="Object_782">
                    <mesh name="Object_782_OnTheFly-bg_0" geometry={nodes['Object_782_OnTheFly-bg_0'].geometry} material={materials['Material.074_40']} />
                  </group>
                </group>
                <group name="Plane" position={[117.182, 25.605, -29.165]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.427, 154.111, 119.911]}>
                  <mesh name="Plane_Material053_0" geometry={nodes.Plane_Material053_0.geometry} material={materials['Material.074_21']} />
                </group>
                <group name="Plane003_425" position={[159.018, 47.32, 359.936]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={19.608}>
                  <group name="Object_788">
                    <mesh name="Object_788_Material057_0" geometry={nodes.Object_788_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Plane008_430" position={[122.701, 53.533, 358.456]} rotation={[-Math.PI / 2, 0.163, -Math.PI]} scale={19.608}>
                  <group name="Object_798">
                    <mesh name="Object_798_Material057_0" geometry={nodes.Object_798_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Plane087_431" position={[190.986, 44.577, 567.479]} rotation={[-Math.PI / 2, -0.089, -Math.PI]} scale={8.872}>
                  <group name="Object_800">
                    <mesh name="Object_800_Material005_0" geometry={nodes.Object_800_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Plane088_432" position={[190.868, 44.628, 565.255]} rotation={[-Math.PI / 2, -0.089, -Math.PI]} scale={8.872}>
                  <group name="Object_802">
                    <mesh name="Object_802_Material005_0" geometry={nodes.Object_802_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Plane089_433" position={[192.49, 44.419, 565.412]} rotation={[-Math.PI / 2, -0.089, -Math.PI]} scale={8.872}>
                  <group name="Object_804">
                    <mesh name="Object_804_Material005_0" geometry={nodes.Object_804_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Plane090_434" position={[192.403, 44.401, 567.472]} rotation={[-Math.PI / 2, -0.089, -Math.PI]} scale={8.872}>
                  <group name="Object_806">
                    <mesh name="Object_806_Material005_0" geometry={nodes.Object_806_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="psuback" position={[-260.266, 77.97, -352.752]} rotation={[0, Math.PI / 2, 0]} scale={59.489}>
                  <mesh name="psuback_psuback_0" geometry={nodes.psuback_psuback_0.geometry} material={materials['Material.074_13']} />
                </group>
                <group name="rgb-hdd-cover-aorus-v1" position={[-93.477, 83.167, -288.796]} scale={36.942}>
                  <mesh name="rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0" geometry={nodes['rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'].geometry} material={materials['Material.074_9']} />
                </group>
                <group name="Sphere" position={[-277.544, 457.86, -407.854]} rotation={[-1.514, 0, 0]} scale={4.86}>
                  <mesh name="Sphere_Material019_0" geometry={nodes.Sphere_Material019_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Sphere001" position={[-277.544, 457.86, -439.732]} rotation={[-1.62, 0, 0]} scale={4.86}>
                  <mesh name="Sphere001_Material019_0" geometry={nodes.Sphere001_Material019_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="test-aorus-m2-souris-aorus-rgb2" position={[-115.854, 150.748, -435.223]} scale={35.194}>
                  <mesh name="test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2" geometry={nodes['test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2'].geometry} material={materials['Material.074_18']} />
                </group>
                <group name="Text" position={[-143.804, 250.193, -325.724]} rotation={[0, 0, Math.PI / 2]} scale={2.436}>
                  <mesh name="Text_Material046_0" geometry={nodes.Text_Material046_0.geometry} material={materials['Material.046']} />
                </group>
                <group name="Text001" position={[87.586, 202.482, -275.486]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[10.325, 8.384, 9.718]}>
                  <mesh name="Text001_Material097_0" geometry={nodes.Text001_Material097_0.geometry} material={materials['Material.012']} />
                </group>
                <group name="Text001_436" position={[141.038, 50.582, 552.01]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_810">
                    <mesh name="Object_810_Material005_0" geometry={nodes.Object_810_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text002_437" position={[141.038, 50.582, 532.026]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_812">
                    <mesh name="Object_812_Material068_0" geometry={nodes.Object_812_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text003_438" position={[141.038, 50.582, 514.784]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_814">
                    <mesh name="Object_814_Material068_0" geometry={nodes.Object_814_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text004_439" position={[141.038, 50.582, 498.138]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_816">
                    <mesh name="Object_816_Material068_0" geometry={nodes.Object_816_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text005_440" position={[141.038, 50.582, 480.752]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_818">
                    <mesh name="Object_818_Material066_0" geometry={nodes.Object_818_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text006_441" position={[141.038, 50.582, 463.616]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_820">
                    <mesh name="Object_820_Material066_0" geometry={nodes.Object_820_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text007_442" position={[141.038, 50.582, 443.746]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.713}>
                  <group name="Object_822">
                    <mesh name="Object_822_Material066_0" geometry={nodes.Object_822_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text008_443" position={[141.649, 50.885, 427.978]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.158}>
                  <group name="Object_824">
                    <mesh name="Object_824_Material066_0" geometry={nodes.Object_824_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text009_444" position={[142.095, 50.955, 409.216]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.158}>
                  <group name="Object_826">
                    <mesh name="Object_826_Material060_0" geometry={nodes.Object_826_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text010_445" position={[158.03, 48.549, 561.971]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_828">
                    <mesh name="Object_828_Material005_0" geometry={nodes.Object_828_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text011_446" position={[158.03, 48.437, 543.875]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_830">
                    <mesh name="Object_830_Material069_0" geometry={nodes.Object_830_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text012_447" position={[158.03, 48.437, 528.227]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_832">
                    <mesh name="Object_832_Material068_0" geometry={nodes.Object_832_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text013_448" position={[158.03, 48.437, 509.564]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_834">
                    <mesh name="Object_834_Material068_0" geometry={nodes.Object_834_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text014_449" position={[158.03, 48.353, 494.305]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_836">
                    <mesh name="Object_836_Material068_0" geometry={nodes.Object_836_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text015_450" position={[156.657, 48.636, 594.003]} rotation={[-1.588, 0, Math.PI / 2]} scale={2.692}>
                  <group name="Object_838">
                    <mesh name="Object_838_Material070_0" geometry={nodes.Object_838_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text017_452" position={[192.644, 45.65, 594.799]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.123}>
                  <group name="Object_840">
                    <mesh name="Object_840_Material070_0" geometry={nodes.Object_840_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text020_455" position={[158.03, 48.437, 475.976]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_842">
                    <mesh name="Object_842_Material066_0" geometry={nodes.Object_842_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text022_457" position={[158.03, 48.437, 441.26]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_846">
                    <mesh name="Object_846_Material066_0" geometry={nodes.Object_846_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text023_458" position={[159.027, 48.639, 422.071]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.915}>
                  <group name="Object_848">
                    <mesh name="Object_848_Material060_0" geometry={nodes.Object_848_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text025_460" position={[122.029, 53.887, 594.924]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.981}>
                  <group name="Object_850">
                    <mesh name="Object_850_Material070_0" geometry={nodes.Object_850_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text026_461" position={[175.487, 47.269, 483.907]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_852">
                    <mesh name="Object_852_Material066_0" geometry={nodes.Object_852_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text027_462" position={[175.487, 47.269, 501.888]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_854">
                    <mesh name="Object_854_Material068_0" geometry={nodes.Object_854_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text028_463" position={[175.487, 47.269, 519.095]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_856">
                    <mesh name="Object_856_Material068_0" geometry={nodes.Object_856_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text029_464" position={[175.487, 47.269, 537.014]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_858">
                    <mesh name="Object_858_Material069_0" geometry={nodes.Object_858_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text030_465" position={[175.487, 47.166, 554.659]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_860">
                    <mesh name="Object_860_Material005_0" geometry={nodes.Object_860_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text031_466" position={[175.487, 47.269, 467.983]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_862">
                    <mesh name="Object_862_Material066_0" geometry={nodes.Object_862_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text032_467" position={[175.487, 47.269, 450.283]} rotation={[-Math.PI / 2, -0.099, Math.PI / 2]} scale={6.414}>
                  <group name="Object_864">
                    <mesh name="Object_864_Material066_0" geometry={nodes.Object_864_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text038_473" position={[122.444, 53.931, 578.061]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_866">
                    <mesh name="Object_866_Material070_0" geometry={nodes.Object_866_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text039_474" position={[122.058, 53.851, 561.226]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.17}>
                  <group name="Object_868">
                    <mesh name="Object_868_Material005_0" geometry={nodes.Object_868_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text040_475" position={[127.008, 53.029, 560.64]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_870">
                    <mesh name="Object_870_Material005_0" geometry={nodes.Object_870_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text053_488" position={[192.644, 45.65, 359.946]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.123}>
                  <group name="Object_872">
                    <mesh name="Object_872_Material057_0" geometry={nodes.Object_872_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text055_490" position={[156.285, 46.937, 363.379]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.006}>
                  <group name="Object_874">
                    <mesh name="Object_874_Material057_0" geometry={nodes.Object_874_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text057_492" position={[122.484, 53.905, 543.373]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_876">
                    <mesh name="Object_876_Material069_0" geometry={nodes.Object_876_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text058_493" position={[127.434, 53.083, 543.258]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_878">
                    <mesh name="Object_878_Material069_0" geometry={nodes.Object_878_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text059_494" position={[122.484, 53.745, 525.768]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_880">
                    <mesh name="Object_880_Material068_0" geometry={nodes.Object_880_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text060_495" position={[127.434, 52.923, 525.651]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_882">
                    <mesh name="Object_882_Material068_0" geometry={nodes.Object_882_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text061_496" position={[101.739, 56.424, 595.272]} rotation={[-Math.PI / 2, 0.141, Math.PI / 2]} scale={4.184}>
                  <group name="Object_884">
                    <mesh name="Object_884_Material070_0" geometry={nodes.Object_884_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text062_497" position={[122.484, 53.852, 509.285]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_886">
                    <mesh name="Object_886_Material068_0" geometry={nodes.Object_886_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text063_498" position={[127.434, 53.031, 508.772]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_888">
                    <mesh name="Object_888_Material068_0" geometry={nodes.Object_888_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text070_505" position={[101.367, 56.132, 484.341]} rotation={[-Math.PI / 2, 0.151, Math.PI / 2]} scale={4.532}>
                  <group name="Object_890">
                    <mesh name="Object_890_Material066_0" geometry={nodes.Object_890_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text071_506" position={[101.205, 56.942, 513.09]} rotation={[-Math.PI / 2, 0.105, Math.PI / 2]} scale={4.451}>
                  <group name="Object_892">
                    <mesh name="Object_892_Material068_0" geometry={nodes.Object_892_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text072_507" position={[101.205, 56.942, 530.455]} rotation={[-Math.PI / 2, 0.105, Math.PI / 2]} scale={4.451}>
                  <group name="Object_894">
                    <mesh name="Object_894_Material069_0" geometry={nodes.Object_894_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text073_508" position={[101.205, 56.942, 548.203]} rotation={[-Math.PI / 2, 0.105, Math.PI / 2]} scale={4.451}>
                  <group name="Object_896">
                    <mesh name="Object_896_Material005_0" geometry={nodes.Object_896_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text074_509" position={[101.205, 56.942, 565.178]} rotation={[-Math.PI / 2, 0.105, Math.PI / 2]} scale={4.451}>
                  <group name="Object_898">
                    <mesh name="Object_898_Material005_0" geometry={nodes.Object_898_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Text079_514" position={[101.367, 56.154, 466.894]} rotation={[-Math.PI / 2, 0.151, Math.PI / 2]} scale={4.532}>
                  <group name="Object_900">
                    <mesh name="Object_900_Material066_0" geometry={nodes.Object_900_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text080_515" position={[101.367, 56.154, 449.367]} rotation={[-Math.PI / 2, 0.151, Math.PI / 2]} scale={4.532}>
                  <group name="Object_902">
                    <mesh name="Object_902_Material066_0" geometry={nodes.Object_902_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text081_516" position={[101.367, 56.154, 431.949]} rotation={[-Math.PI / 2, 0.151, Math.PI / 2]} scale={4.532}>
                  <group name="Object_904">
                    <mesh name="Object_904_Material066_0" geometry={nodes.Object_904_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text082_517" position={[101.473, 56.121, 402.973]} rotation={[-Math.PI / 2, 0.161, Math.PI / 2]} scale={4.501}>
                  <group name="Object_906">
                    <mesh name="Object_906_Material060_0" geometry={nodes.Object_906_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text083_518" position={[101.352, 56.184, 386.481]} rotation={[-Math.PI / 2, 0.196, Math.PI / 2]} scale={4.189}>
                  <group name="Object_908">
                    <mesh name="Object_908_Material057_0" geometry={nodes.Object_908_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text084_519" position={[101.352, 56.184, 368.472]} rotation={[-Math.PI / 2, 0.196, Math.PI / 2]} scale={4.189}>
                  <group name="Object_910">
                    <mesh name="Object_910_Material057_0" geometry={nodes.Object_910_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text085_520" position={[101.352, 56.184, 351.349]} rotation={[-Math.PI / 2, 0.196, Math.PI / 2]} scale={4.189}>
                  <group name="Object_912">
                    <mesh name="Object_912_Material057_0" geometry={nodes.Object_912_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text086_521" position={[122.484, 53.852, 491.651]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_914">
                    <mesh name="Object_914_Material068_0" geometry={nodes.Object_914_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text087_522" position={[127.434, 53.03, 491.824]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_916">
                    <mesh name="Object_916_Material068_0" geometry={nodes.Object_916_Material068_0.geometry} material={materials['Material.074_37']} />
                  </group>
                </group>
                <group name="Text088_523" position={[122.484, 53.821, 473.664]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_918">
                    <mesh name="Object_918_Material066_0" geometry={nodes.Object_918_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text089_524" position={[127.434, 52.999, 473.405]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_920">
                    <mesh name="Object_920_Material066_0" geometry={nodes.Object_920_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text090_525" position={[122.484, 53.851, 456.473]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={3.822}>
                  <group name="Object_922">
                    <mesh name="Object_922_Material066_0" geometry={nodes.Object_922_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text091_526" position={[127.434, 53.03, 456.746]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_924">
                    <mesh name="Object_924_Material066_0" geometry={nodes.Object_924_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text092_527" position={[121.673, 54.096, 439.122]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={[3.822, 3.142, 3.822]}>
                  <group name="Object_926">
                    <mesh name="Object_926_Material066_0" geometry={nodes.Object_926_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text093_528" position={[120.313, 54.212, 419.687]} rotation={[-Math.PI / 2, 0.164, -Math.PI / 2]} scale={[3.822, 3.142, 3.822]}>
                  <group name="Object_928">
                    <mesh name="Object_928_Material060_0" geometry={nodes.Object_928_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text094_529" position={[127.434, 53.034, 439.361]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_930">
                    <mesh name="Object_930_Material066_0" geometry={nodes.Object_930_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text095_530" position={[127.434, 53.03, 421.591]} rotation={[-Math.PI / 2, 0.164, Math.PI / 2]} scale={4.326}>
                  <group name="Object_932">
                    <mesh name="Object_932_Material060_0" geometry={nodes.Object_932_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text099_534" position={[186.135, 46.575, 219.396]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.006}>
                  <group name="Object_934">
                    <mesh name="Object_934_Tasten_2_0" geometry={nodes.Object_934_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text135_570" position={[173.52, 46.999, 585.524]} rotation={[-1.64, 0, -0.001]} scale={[6.197, 8.42, 6.209]}>
                  <group name="Object_936">
                    <mesh name="Object_936_Material070_0" geometry={nodes.Object_936_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text136_571" position={[175.034, 47.036, 400.009]} rotation={[-1.571, -0.079, 1.57]} scale={[6.672, 4.931, 2.742]}>
                  <group name="Object_938">
                    <mesh name="Object_938_Material060_0" geometry={nodes.Object_938_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text137_572" position={[175.034, 47.036, 434.853]} rotation={[-1.571, -0.079, 1.57]} scale={[4.24, 4.931, 2.742]}>
                  <group name="Object_940">
                    <mesh name="Object_940_Material060_0" geometry={nodes.Object_940_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text138_573" position={[176.052, 46.788, 584.43]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[1.861, 6.968, 6.968]}>
                  <group name="Object_942">
                    <mesh name="Object_942_Material070_0" geometry={nodes.Object_942_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text139_574" position={[175.034, 47.036, 417.325]} rotation={[-1.571, -0.079, 1.57]} scale={[4.24, 4.931, 2.742]}>
                  <group name="Object_944">
                    <mesh name="Object_944_Material060_0" geometry={nodes.Object_944_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text140_575" position={[126.21, 53.665, 253.133]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.449}>
                  <group name="Object_946">
                    <mesh name="Object_946_Tasten_2_0" geometry={nodes.Object_946_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text141_576" position={[122.219, 53.893, 271.172]} rotation={[-Math.PI / 2, 0.214, Math.PI / 2]} scale={2.7}>
                  <group name="Object_948">
                    <mesh name="Object_948_Material067_0" geometry={nodes.Object_948_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text142_577" position={[192.324, 45.452, 259.967]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={4.419}>
                  <group name="Object_950">
                    <mesh name="Object_950_Material067_0" geometry={nodes.Object_950_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text143_578" position={[197.023, 45.614, 260.99]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={3.792}>
                  <group name="Object_952">
                    <mesh name="Object_952_Material067_0" geometry={nodes.Object_952_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text144_579" position={[184.777, 33.32, 601.234]} rotation={[-Math.PI / 2, 0.09, -Math.PI]} scale={[5.012, 3.876, 5.012]}>
                  <group name="Object_954">
                    <mesh name="Object_954_Material072_0" geometry={nodes.Object_954_Material072_0.geometry} material={materials['Material.012']} />
                  </group>
                </group>
                <group name="Text145_580" position={[164.62, 35.132, 204.967]} rotation={[-Math.PI / 2, 0.089, 0]} scale={3.129}>
                  <group name="Object_956">
                    <mesh name="Object_956_Material072_0" geometry={nodes.Object_956_Material072_0.geometry} material={materials['Material.012']} />
                  </group>
                </group>
                <group name="Text146_581" position={[189.418, 46.757, 488.892]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[4.951, 15.565, 11.588]}>
                  <group name="Object_958">
                    <mesh name="Object_958_Material066_0" geometry={nodes.Object_958_Material066_0.geometry} material={materials['Material.074_35']} />
                  </group>
                </group>
                <group name="Text147_582" position={[140.393, 50.323, 267.745]} rotation={[-Math.PI / 2, 0.077, Math.PI / 2]} scale={4.079}>
                  <group name="Object_960">
                    <mesh name="Object_960_Material067_0" geometry={nodes.Object_960_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text148_583" position={[145.186, 50.323, 270.034]} rotation={[-Math.PI / 2, 0.077, Math.PI / 2]} scale={2.491}>
                  <group name="Object_962">
                    <mesh name="Object_962_Material067_0" geometry={nodes.Object_962_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text149_584" position={[145.186, 50.323, 234.871]} rotation={[-Math.PI / 2, 0.077, Math.PI / 2]} scale={2.491}>
                  <group name="Object_964">
                    <mesh name="Object_964_Tasten_2_0" geometry={nodes.Object_964_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text150_585" position={[157.086, 48.546, 408.618]} rotation={[-1.571, -0.079, 1.57]} scale={[6.672, 4.931, 2.742]}>
                  <group name="Object_966">
                    <mesh name="Object_966_Material060_0" geometry={nodes.Object_966_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text151_586" position={[158.955, 48.546, 391.27]} rotation={[-1.571, -0.043, 1.57]} scale={[6.672, 4.931, 2.742]}>
                  <group name="Object_968">
                    <mesh name="Object_968_Material060_0" geometry={nodes.Object_968_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text152_587" position={[140.393, 50.369, 250.493]} rotation={[-Math.PI / 2, 0.077, Math.PI / 2]} scale={4.079}>
                  <group name="Object_970">
                    <mesh name="Object_970_Tasten_2_0" geometry={nodes.Object_970_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text153_588" position={[158.805, 47.353, 358.081]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[3.749, 1.659, 5.449]}>
                  <group name="Object_972">
                    <mesh name="Object_972_Material057_0" geometry={nodes.Object_972_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text154_589" position={[158.529, 47.353, 360.205]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.449}>
                  <group name="Object_974">
                    <mesh name="Object_974_Material057_0" geometry={nodes.Object_974_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text155_590" position={[138.806, 50.51, 591.899]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.568}>
                  <group name="Object_976">
                    <mesh name="Object_976_Material070_0" geometry={nodes.Object_976_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text156_591" position={[140.393, 50.369, 233.01]} rotation={[-Math.PI / 2, 0.077, Math.PI / 2]} scale={4.079}>
                  <group name="Object_978">
                    <mesh name="Object_978_Tasten_2_0" geometry={nodes.Object_978_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text157_592" position={[143.95, 50.122, 251.216]} rotation={[-1.494, 0, 0]} scale={[2.491, 4.577, 2.508]}>
                  <group name="Object_980">
                    <mesh name="Object_980_Tasten_2_0" geometry={nodes.Object_980_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text158_593" position={[100.211, 56.325, 328.505]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_982">
                    <mesh name="Object_982_Material057_0" geometry={nodes.Object_982_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text159_594" position={[100.211, 56.325, 310.762]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_984">
                    <mesh name="Object_984_Material057_0" geometry={nodes.Object_984_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text160_595" position={[100.211, 56.325, 293.444]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_986">
                    <mesh name="Object_986_Material057_0" geometry={nodes.Object_986_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text161_596" position={[158.196, 48.546, 268.318]} rotation={[-1.571, -0.043, 1.57]} scale={[5.119, 4.444, 2.472]}>
                  <group name="Object_988">
                    <mesh name="Object_988_Material067_0" geometry={nodes.Object_988_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text162_597" position={[162.312, 48.546, 268.012]} rotation={[-1.571, -0.043, 1.57]} scale={[3.213, 4.444, 2.472]}>
                  <group name="Object_990">
                    <mesh name="Object_990_Material067_0" geometry={nodes.Object_990_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text163_598" position={[158.196, 48.546, 250.902]} rotation={[-1.571, -0.043, 1.57]} scale={[5.119, 4.444, 2.472]}>
                  <group name="Object_992">
                    <mesh name="Object_992_Tasten_2_0" geometry={nodes.Object_992_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text164_599" position={[158.196, 48.546, 233.224]} rotation={[-1.571, -0.043, 1.57]} scale={[5.119, 4.444, 2.472]}>
                  <group name="Object_994">
                    <mesh name="Object_994_Tasten_2_0" geometry={nodes.Object_994_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text165_600" position={[162.312, 48.546, 232.693]} rotation={[-1.571, -0.043, 1.57]} scale={[3.213, 4.444, 2.472]}>
                  <group name="Object_996">
                    <mesh name="Object_996_Tasten_2_0" geometry={nodes.Object_996_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text166_601" position={[191.769, 45.452, 235.883]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={3.252}>
                  <group name="Object_998">
                    <mesh name="Object_998_Tasten_2_0" geometry={nodes.Object_998_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text167_602" position={[139.974, 50.54, 592.705]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.459}>
                  <group name="Object_1000">
                    <mesh name="Object_1000_Material070_0" geometry={nodes.Object_1000_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text168_603" position={[141.683, 50.51, 585.651]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={5.568}>
                  <group name="Object_1002">
                    <mesh name="Object_1002_Material070_0" geometry={nodes.Object_1002_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text169_604" position={[140.515, 50.54, 584.845]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={2.459}>
                  <group name="Object_1004">
                    <mesh name="Object_1004_Material070_0" geometry={nodes.Object_1004_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text170_605" position={[192.324, 45.452, 402.259]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={2.698}>
                  <group name="Object_1006">
                    <mesh name="Object_1006_Material057_0" geometry={nodes.Object_1006_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text171_606" position={[192.324, 45.452, 377.975]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={2.698}>
                  <group name="Object_1008">
                    <mesh name="Object_1008_Material057_0" geometry={nodes.Object_1008_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text172_607" position={[192.115, 45.452, 422.374]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={2.698}>
                  <group name="Object_1010">
                    <mesh name="Object_1010_Material060_0" geometry={nodes.Object_1010_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text173_608" position={[176.052, 46.788, 581.642]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[1.861, 6.968, 6.968]}>
                  <group name="Object_1012">
                    <mesh name="Object_1012_Material070_0" geometry={nodes.Object_1012_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text174_609" position={[178.056, 46.788, 584.43]} rotation={[-1.502, 0, -Math.PI]} scale={[2.693, 9.468, 6.982]}>
                  <group name="Object_1014">
                    <mesh name="Object_1014_Material070_0" geometry={nodes.Object_1014_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text175_610" position={[178.056, 46.788, 582.626]} rotation={[-1.502, 0, -Math.PI]} scale={[2.693, 9.468, 6.982]}>
                  <group name="Object_1016">
                    <mesh name="Object_1016_Material070_0" geometry={nodes.Object_1016_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text176_611" position={[177.223, 46.788, 583.339]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[3.572, 6.968, 6.968]}>
                  <group name="Object_1018">
                    <mesh name="Object_1018_Material070_0" geometry={nodes.Object_1018_Material070_0.geometry} material={materials['Material.074_39']} />
                  </group>
                </group>
                <group name="Text177_612" position={[173.52, 47.036, 367.415]} rotation={[-1.564, 0, -0.001]} scale={[6.197, 11.143, 6.197]}>
                  <group name="Object_1020">
                    <mesh name="Object_1020_Material057_0" geometry={nodes.Object_1020_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text178_613" position={[176.257, 47.093, 365.528]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[2.188, 6.197, 6.197]}>
                  <group name="Object_1022">
                    <mesh name="Object_1022_Material057_0" geometry={nodes.Object_1022_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text179_614" position={[176.257, 47.093, 362.251]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[2.188, 6.197, 6.197]}>
                  <group name="Object_1024">
                    <mesh name="Object_1024_Material057_0" geometry={nodes.Object_1024_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text180_615" position={[178.04, 47.093, 365.528]} rotation={[-1.502, 0, -Math.PI]} scale={[2.395, 11.125, 6.229]}>
                  <group name="Object_1026">
                    <mesh name="Object_1026_Material057_0" geometry={nodes.Object_1026_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text181_616" position={[178.04, 47.093, 363.407]} rotation={[-1.502, 0, -Math.PI]} scale={[2.395, 11.125, 6.229]}>
                  <group name="Object_1028">
                    <mesh name="Object_1028_Material057_0" geometry={nodes.Object_1028_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text182_617" position={[177.299, 47.093, 364.245]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={[4.2, 6.197, 6.197]}>
                  <group name="Object_1030">
                    <mesh name="Object_1030_Material057_0" geometry={nodes.Object_1030_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text183_618" position={[122.224, 53.645, 358.725]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={5.449}>
                  <group name="Object_1032">
                    <mesh name="Object_1032_Material057_0" geometry={nodes.Object_1032_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text184_619" position={[122.224, 53.782, 328.505]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1034">
                    <mesh name="Object_1034_Material057_0" geometry={nodes.Object_1034_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text185_620" position={[122.224, 53.782, 311.134]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1036">
                    <mesh name="Object_1036_Material057_0" geometry={nodes.Object_1036_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text186_621" position={[122.224, 53.782, 292.768]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1038">
                    <mesh name="Object_1038_Material057_0" geometry={nodes.Object_1038_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text187_622" position={[152.112, 49.615, 217.775]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.449}>
                  <group name="Object_1040">
                    <mesh name="Object_1040_Tasten_2_0" geometry={nodes.Object_1040_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text188_623" position={[123.41, 53.509, 217.775]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.449}>
                  <group name="Object_1042">
                    <mesh name="Object_1042_Tasten_2_0" geometry={nodes.Object_1042_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text189_624" position={[140.393, 50.558, 328.601]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1044">
                    <mesh name="Object_1044_Material057_0" geometry={nodes.Object_1044_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text190_625" position={[140.393, 50.558, 310.089]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1046">
                    <mesh name="Object_1046_Material057_0" geometry={nodes.Object_1046_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text191_626" position={[140.393, 50.558, 293.029]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.522}>
                  <group name="Object_1048">
                    <mesh name="Object_1048_Material057_0" geometry={nodes.Object_1048_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text192_627" position={[126.59, 53.665, 235.644]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.449}>
                  <group name="Object_1050">
                    <mesh name="Object_1050_Tasten_2_0" geometry={nodes.Object_1050_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text193_628" position={[138.832, 50.656, 360.842]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={2.99}>
                  <group name="Object_1052">
                    <mesh name="Object_1052_Material057_0" geometry={nodes.Object_1052_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text194_629" position={[138.832, 50.519, 377.705]} rotation={[-Math.PI / 2, 0.043, Math.PI / 2]} scale={2.99}>
                  <group name="Object_1054">
                    <mesh name="Object_1054_Material057_0" geometry={nodes.Object_1054_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text195_630" position={[138.832, 50.625, 395.771]} rotation={[-Math.PI / 2, 0.043, Math.PI / 2]} scale={2.99}>
                  <group name="Object_1056">
                    <mesh name="Object_1056_Material073_0" geometry={nodes.Object_1056_Material073_0.geometry} material={materials['Material.073']} />
                  </group>
                </group>
                <group name="Text196_631" position={[122.224, 53.899, 387.246]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={4.683}>
                  <group name="Object_1058">
                    <mesh name="Object_1058_Material057_0" geometry={nodes.Object_1058_Material057_0.geometry} material={materials['Material.074_33']} />
                  </group>
                </group>
                <group name="Text197_632" position={[118.88, 54.414, 404.726]} rotation={[-Math.PI / 2, 0.163, Math.PI / 2]} scale={4.683}>
                  <group name="Object_1060">
                    <mesh name="Object_1060_Material060_0" geometry={nodes.Object_1060_Material060_0.geometry} material={materials['Material.074_34']} />
                  </group>
                </group>
                <group name="Text198_633" position={[178.586, 47.223, 251.216]} rotation={[-1.494, -0.039, 0.003]} scale={[2.491, 4.577, 2.508]}>
                  <group name="Object_1062">
                    <mesh name="Object_1062_Tasten_2_0" geometry={nodes.Object_1062_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text199_634" position={[175.034, 47.036, 250.749]} rotation={[-1.571, -0.079, 1.57]} scale={[4.723, 4.038, 2.74]}>
                  <group name="Object_1064">
                    <mesh name="Object_1064_Tasten_2_0" geometry={nodes.Object_1064_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text200_635" position={[175.034, 47.036, 267.898]} rotation={[-1.571, -0.079, 1.57]} scale={[4.723, 4.038, 2.74]}>
                  <group name="Object_1066">
                    <mesh name="Object_1066_Material067_0" geometry={nodes.Object_1066_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text201_636" position={[180.145, 47.436, 269.122]} rotation={[-1.571, -0.079, 1.57]} scale={[3.03, 2.591, 1.758]}>
                  <group name="Object_1068">
                    <mesh name="Object_1068_Material067_0" geometry={nodes.Object_1068_Material067_0.geometry} material={materials['Material.074_36']} />
                  </group>
                </group>
                <group name="Text202_637" position={[175.034, 47.036, 233.446]} rotation={[-1.571, -0.079, 1.57]} scale={[4.723, 4.038, 2.74]}>
                  <group name="Object_1070">
                    <mesh name="Object_1070_Tasten_2_0" geometry={nodes.Object_1070_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text203_638" position={[180.145, 47.583, 235.555]} rotation={[-1.571, -0.079, 1.57]} scale={[3.03, 2.591, 1.758]}>
                  <group name="Object_1072">
                    <mesh name="Object_1072_Tasten_2_0" geometry={nodes.Object_1072_Tasten_2_0.geometry} material={materials.Tasten_2} />
                  </group>
                </group>
                <group name="Text204_639" position={[192.115, 45.452, 545.462]} rotation={[-Math.PI / 2, -0.069, Math.PI / 2]} scale={2.698}>
                  <group name="Object_1074">
                    <mesh name="Object_1074_Material069_0" geometry={nodes.Object_1074_Material069_0.geometry} material={materials['Material.074_38']} />
                  </group>
                </group>
                <group name="Text_435" position={[140.844, 50.582, 568.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.414}>
                  <group name="Object_808">
                    <mesh name="Object_808_Material005_0" geometry={nodes.Object_808_Material005_0.geometry} material={materials['Material.074_32']} />
                  </group>
                </group>
                <group name="Torus" position={[69.926, 356.741, -407.005]} rotation={[-Math.PI / 2, 0, 0]} scale={3.297}>
                  <mesh name="Torus_Material013_0" geometry={nodes.Torus_Material013_0.geometry} material={materials['Material.013']} />
                </group>
                <group name="Torus001" position={[69.926, 356.741, -423.729]} rotation={[-Math.PI / 2, 0, 0]} scale={3.297}>
                  <mesh name="Torus001_Material032_0" geometry={nodes.Torus001_Material032_0.geometry} material={materials['Material.032']} />
                </group>
                <group name="usb" position={[70.473, 357.15, -289.695]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.342}>
                  <mesh name="usb_usb_0" geometry={nodes.usb_usb_0.geometry} material={materials['Material.074_14']} />
                </group>
                <group name="usb001" position={[70.473, 357.15, -321.003]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.342}>
                  <mesh name="usb001_usb_0" geometry={nodes.usb001_usb_0.geometry} material={materials['Material.074_14']} />
                </group>
                <group name="usb002" position={[70.473, 357.15, -352.59]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.342}>
                  <mesh name="usb002_usb_0" geometry={nodes.usb002_usb_0.geometry} material={materials['Material.074_14']} />
                </group>
                <group name="usb003" position={[70.473, 357.15, -384.891]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.342}>
                  <mesh name="usb003_usb_0" geometry={nodes.usb003_usb_0.geometry} material={materials['Material.074_14']} />
                </group>
              </group>
            </group>
          </group>
      </group>
      </group>
  );
}

useGLTF.preload('/models/computer-setup.glb');