convolution();

async function convolution()
{
	const Jimp = require("jimp");

	const kernels =
	[
		{name: "emboss", kernel: [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]]},
		{name: "edgedetect", kernel: [[0, 1, 0], [1, -4, 1], [0, 1, 0]]},
		{name: "edgeenhance", kernel: [[0, 0, 0], [-1, 1, 0], [0, 0, 0]]},
		{name: "blur", kernel: [[0.0625, 0.125, 0.0625],[0.125, 0.25, 0.125], [0.0625, 0.125, 0.0625]]},
		// equivalent to {name: "blur", kernel: [[1/16, 1/8, 1/16],[1/8, 1/4, 1/8], [1/16, 1/8, 1/16]]},
		{name: "sharpen", kernel: [[0,-1,0], [-1,5,-1], [0,-1,0]]}
	];

	for(kernel of kernels)
	{
		const photo = await Jimp.read("templestation.jpg");

		console.log(kernel.name);
		console.log(kernel.kernel);

		photo.convolute(kernel.kernel);

		photo.write(`templestation_${kernel.name}.jpg`);
	}
}
