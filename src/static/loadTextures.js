const loadTextures = async (panorama, textureLoader, setTexturesLoaded, setMaterial) => {
    const newArray = await Promise.all(
        panorama.panoramCurrent.map(async (item, index) => {
            const texture = await textureLoader.loadAsync(item.current);
            setTexturesLoaded((prevTextures) => [...prevTextures, true]);
            return {
                current: texture,
                cameraPosition: panorama.panoramCurrent[index].cameraPosition,
                isShow: panorama.panoramCurrent[index].isShow,
                interactive: panorama.panoramCurrent[index].interactive,
                id: panorama.panoramCurrent[index].id
            };
        })
    );
    setMaterial((prevMaterial) => [...prevMaterial, ...newArray]);
};

export default loadTextures