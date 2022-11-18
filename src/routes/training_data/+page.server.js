export const load = async () => {
	// const environment_variables = import.meta.env;
	const url = `http://127.0.0.1:8000/get_categories`;
	var categories = [];
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                categories = data;
            })
            .catch((err) => console.log(err));
	return {
		categories:categories
	};
};
