export const uploadFiles = async({selectedFiles} : {selectedFiles: File[]}) => {
        try {
            if (selectedFiles.length == 0) return {status: 404};
            const formData = new FormData();
            selectedFiles.forEach(file => {
                formData.append(file.name, file)
            })
            const req = await fetch("/api/file", {
                headers: {
                    "PATH": "books"
                },
                method: "POST",
                body: formData
            });

            const res = await req.json();
            return {status: 200}
        } catch (error: any) {
            console.log(error.response?.data);
        }
}