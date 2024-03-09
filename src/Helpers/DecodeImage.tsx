export const imagesHelpers = {
    imageToBase64: async (image: any) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(image);
        });
      },
      DecodeImage: (base64: string | undefined): string | undefined => {
        if (!base64) return undefined;
        return atob(base64);
      }
}