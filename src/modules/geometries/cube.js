import {Vector3, computeNormal} from "../../math/math.js"
import {Geometry} from "../../core/Geometry.js";

export const cube = new Geometry({
	numElements: 36,
	buffers: [
		{
			name: "position",
			buffer: new Float32Array([
				// bottom
				-0.5, -0.5, -0.5,
				 0.5,  0.5, -0.5,
				 0.5, -0.5, -0.5,
				-0.5, -0.5, -0.5,
				-0.5,  0.5, -0.5,
				 0.5,  0.5, -0.5,

				// top
				-0.5, -0.5,  0.5,
				 0.5, -0.5,  0.5,
				 0.5,  0.5,  0.5,
				-0.5, -0.5,  0.5,
				 0.5,  0.5,  0.5,
				-0.5,  0.5,  0.5,

				// left
				-0.5, -0.5, -0.5, 
				-0.5,  0.5,  0.5, 
				-0.5,  0.5, -0.5, 
				-0.5, -0.5, -0.5, 
				-0.5, -0.5,  0.5, 
				-0.5,  0.5,  0.5, 

				// right
				 0.5, -0.5, -0.5,
				 0.5,  0.5, -0.5,
				 0.5,  0.5,  0.5,
				 0.5, -0.5, -0.5,
				 0.5,  0.5,  0.5,
				 0.5, -0.5,  0.5,

				// back
				 -0.5, 0.5, -0.5,
				  0.5, 0.5,  0.5,
				  0.5, 0.5, -0.5,
				 -0.5, 0.5, -0.5,
				 -0.5, 0.5,  0.5,
				  0.5, 0.5,  0.5,

				 // front
				 -0.5, -0.5, -0.5,
				  0.5, -0.5, -0.5,
				  0.5, -0.5,  0.5,
				 -0.5, -0.5, -0.5,
				  0.5, -0.5,  0.5,
				 -0.5, -0.5,  0.5,
			]),
		},{
			name: "color",
			buffer: new Float32Array([
				-1, -1, -1,
				 1, -1, -1,
				 1,  1, -1,
				-1, -1, -1,
				 1,  1, -1,
				-1,  1, -1,

				-1, -1,  1,
				 1, -1,  1,
				 1,  1,  1,
				-1, -1,  1,
				 1,  1,  1,
				-1,  1,  1,
			]),
		},{
			name: "uv",
			buffer: new Float32Array([
				0, 0,
				1, 0,
				1, 1,

				0, 0,
				1, 1,
				0, 1,

				0, 0,
				1, 0,
				1, 1,

				0, 0,
				1, 1,
				0, 1,
			]),
		},{
			name: "normal",
			buffer: new Float32Array([
				0, 0, -1,
				0, 0, -1,
				0, 0, -1,
				0, 0, -1,
				0, 0, -1,
				0, 0, -1,

				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,

				-1, 0, 0, 
				-1, 0, 0, 
				-1, 0, 0, 
				-1, 0, 0, 
				-1, 0, 0, 
				-1, 0, 0, 

				 1, 0, 0, 
				 1, 0, 0, 
				 1, 0, 0, 
				 1, 0, 0, 
				 1, 0, 0, 
				 1, 0, 0, 

				0, -1, 0, 
				0, -1, 0, 
				0, -1, 0, 
				0, -1, 0, 
				0, -1, 0, 
				0, -1, 0, 

				0,  1, 0, 
				0,  1, 0, 
				0,  1, 0, 
				0,  1, 0, 
				0,  1, 0, 
				0,  1, 0, 
			]),
		}
	],
});

export const cube_wireframe = new Geometry({
	numElements: 24,
	buffers: [
		{
			name: "position",
			buffer: new Float32Array([

				// bottom
				-0.5, -0.5, -0.5,
				 0.5, -0.5, -0.5,

				 0.5, -0.5, -0.5,
				 0.5,  0.5, -0.5,

				 0.5,  0.5, -0.5,
				-0.5,  0.5, -0.5,

				-0.5,  0.5, -0.5,
				-0.5, -0.5, -0.5,

				// top
				-0.5, -0.5,  0.5,
				 0.5, -0.5,  0.5,

				 0.5, -0.5,  0.5,
				 0.5,  0.5,  0.5,

				 0.5,  0.5,  0.5,
				-0.5,  0.5,  0.5,

				-0.5,  0.5,  0.5,
				-0.5, -0.5,  0.5,

				// bottom to top
				-0.5, -0.5, -0.5,
				-0.5, -0.5,  0.5,

				 0.5, -0.5, -0.5,
				 0.5, -0.5,  0.5,

				 0.5,  0.5, -0.5,
				 0.5,  0.5,  0.5,

				-0.5,  0.5, -0.5,
				-0.5,  0.5,  0.5,
			]),
		},{
			name: "direction",
			buffer: new Float32Array([

				// bottom
				 1,  0,  0,
				-1,  0,  0,

				 0,  1,  0,
				 0, -1,  0,

				-1,  0,  0,
				 1,  0,  0,

				 0, -1,  0,
				 0,  1,  0,

				// top
				 1,  0,  0,
				-1,  0,  0,

				 0,  1,  0,
				 0, -1,  0,

				-1,  0,  0,
				 1,  0,  0,

				 0, -1,  0,
				 0,  1,  0,

				// bottom to top
				0, 0,  1,
				0, 0, -1,

				0, 0,  1,
				0, 0, -1,

				0, 0,  1,
				0, 0, -1,

				0, 0,  1,
				0, 0, -1,
			]),
		}
	]
});

export const cube_wireframe_thick = new Geometry({
	numElements: 72,
	buffers: [
		{
			name: "position",
			buffer: new Float32Array([
				-0.5, -0.5, -0.5,
				+0.5, -0.5, -0.5,
				+0.5, -0.5, -0.5,
				-0.5, -0.5, -0.5,
				+0.5, -0.5, -0.5,
				-0.5, -0.5, -0.5,

				-0.5, -0.5, +0.5,
				+0.5, -0.5, +0.5,
				+0.5, -0.5, +0.5,
				-0.5, -0.5, +0.5,
				+0.5, -0.5, +0.5,
				-0.5, -0.5, +0.5,

				-0.5, +0.5, -0.5,
				+0.5, +0.5, -0.5,
				+0.5, +0.5, -0.5,
				-0.5, +0.5, -0.5,
				+0.5, +0.5, -0.5,
				-0.5, +0.5, -0.5,

				-0.5, +0.5, +0.5,
				+0.5, +0.5, +0.5,
				+0.5, +0.5, +0.5,
				-0.5, +0.5, +0.5,
				+0.5, +0.5, +0.5,
				-0.5, +0.5, +0.5,

				-0.5, -0.5, -0.5,
				-0.5, +0.5, -0.5,
				-0.5, +0.5, -0.5,
				-0.5, -0.5, -0.5,
				-0.5, +0.5, -0.5,
				-0.5, -0.5, -0.5,

				-0.5, -0.5, +0.5,
				-0.5, +0.5, +0.5,
				-0.5, +0.5, +0.5,
				-0.5, -0.5, +0.5,
				-0.5, +0.5, +0.5,
				-0.5, -0.5, +0.5,

				+0.5, -0.5, -0.5,
				+0.5, +0.5, -0.5,
				+0.5, +0.5, -0.5,
				+0.5, -0.5, -0.5,
				+0.5, +0.5, -0.5,
				+0.5, -0.5, -0.5,

				+0.5, -0.5, +0.5,
				+0.5, +0.5, +0.5,
				+0.5, +0.5, +0.5,
				+0.5, -0.5, +0.5,
				+0.5, +0.5, +0.5,
				+0.5, -0.5, +0.5,

				-0.5, -0.5, -0.5,
				-0.5, -0.5, +0.5,
				-0.5, -0.5, +0.5,
				-0.5, -0.5, -0.5,
				-0.5, -0.5, +0.5,
				-0.5, -0.5, -0.5,

				+0.5, -0.5, -0.5,
				+0.5, -0.5, +0.5,
				+0.5, -0.5, +0.5,
				+0.5, -0.5, -0.5,
				+0.5, -0.5, +0.5,
				+0.5, -0.5, -0.5,

				+0.5, +0.5, -0.5,
				+0.5, +0.5, +0.5,
				+0.5, +0.5, +0.5,
				+0.5, +0.5, -0.5,
				+0.5, +0.5, +0.5,
				+0.5, +0.5, -0.5,

				-0.5, +0.5, -0.5,
				-0.5, +0.5, +0.5,
				-0.5, +0.5, +0.5,
				-0.5, +0.5, -0.5,
				-0.5, +0.5, +0.5,
				-0.5, +0.5, -0.5,
			]),
		},{
			name: "direction",
			buffer: new Float32Array([
				+1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				-1, 0, 0,

				+1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				-1, 0, 0,

				+1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				-1, 0, 0,

				+1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				+1, 0, 0,
				-1, 0, 0,
				-1, 0, 0,

				0, +1, 0,
				0, +1, 0,
				0, -1, 0,
				0, +1, 0,
				0, -1, 0,
				0, -1, 0,

				0, +1, 0,
				0, +1, 0,
				0, -1, 0,
				0, +1, 0,
				0, -1, 0,
				0, -1, 0,

				0, +1, 0,
				0, +1, 0,
				0, -1, 0,
				0, +1, 0,
				0, -1, 0,
				0, -1, 0,

				0, +1, 0,
				0, +1, 0,
				0, -1, 0,
				0, +1, 0,
				0, -1, 0,
				0, -1, 0,

				0, 0, +1,
				0, 0, +1,
				0, 0, -1,
				0, 0, +1,
				0, 0, -1,
				0, 0, -1,

				0, 0, +1,
				0, 0, +1,
				0, 0, -1,
				0, 0, +1,
				0, 0, -1,
				0, 0, -1,

				0, 0, +1,
				0, 0, +1,
				0, 0, -1,
				0, 0, +1,
				0, 0, -1,
				0, 0, -1,

				0, 0, +1,
				0, 0, +1,
				0, 0, -1,
				0, 0, +1,
				0, 0, -1,
				0, 0, -1,
			]),
		}
	]
});
