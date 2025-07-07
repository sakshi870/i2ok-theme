window.CroppieInterop = {
    croppieInstance: null,

    initializeCroppie: function (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
            this.croppieInstance = new Croppie(el, {
                viewport: { type: 'square' }, // Remove width & height (they will be set via CSS)
                boundary: {}, // Remove width & height (they will be set via CSS)
                showZoomer: true
            });
        } else {
            console.error("Element with ID '" + elementId + "' not found.");
        }
    },


    bindImage: function (imageData) {
        if (this.croppieInstance) {
            console.log("Binding Image: ", imageData);
            return this.croppieInstance.bind({ url: imageData });
        } else {
            console.error("Croppie instance not initialized!");
        }
    },

    cropImage: async function () {
        if (this.croppieInstance) {
            return await this.croppieInstance.result({
                type: "base64",
                format: "webp",
                size: { width: 500, height: 500 },
                quality: 0.8
            });
        } else {
            console.error("Croppie instance not initialized!");
            return null;
        }
    }
};