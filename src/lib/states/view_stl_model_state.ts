import { writable } from 'svelte/store'

// % operator in javascript is een remainder, geen modulo
// javascript == typescript ?
const modulo = (a: number, b: number) => { return ((a % b) + b) % b; }


export const color_red = writable(0)
export const color_green = writable(0)
export const color_blue = writable(255)

export const product_color_hex = writable("#0000ff") // // Use RGB values ?
export const bbox_opacity = writable(0.315)

// // General_Demo: Impeller
export const object_node_name = 'Ventilatorstl'
export const object_model_name = '/models/demo_models/Impeller.glb'
export const stl_object_model_name = '/models/demo_models/Impeller.stl'
// // CAN'T LOAD FROM DISK LOCATION ! ! ! REQUIRE A URL FILE LOCATION.
// export const stl_object_model_name = 'D:/ServerFolder/qwision/demo/q000000/Impeller.stl'
// export const stl_object_model_name = 'D:\\ServerFolder\\qwision\\demo\\q000000\\Impeller.stl'

// export const stl_object_model_name = '/models/demo_models/x30_y90_z10_mm.stl'

// // Plate_Ax demo
// export const boundingbox_x = 0.210;
// export const boundingbox_y = 0.297;
// export const boundingbox_z = 0.003;

// export const view_zoom = writable(2000)

// export const rotation_x = writable(90)
// export const rotation_y = writable(0)
// export const rotation_z = writable(0)


// // Plate_Ax Impeller
export const view_zoom = writable(4000)

export const product_position_x = writable(0.000)
export const product_position_y = writable(0.000)
export const product_position_z = writable(-0.003280)

export const product_rotation_x = writable(90)
export const product_rotation_y = writable(0)
export const product_rotation_z = writable(0)

export const boundingbox_x = writable(0.080);
export const boundingbox_y = writable(0.080);
export const boundingbox_z = writable(0.018);

export const bbox_position_x = writable(0.000)
export const bbox_position_y = writable(0.000)
export const bbox_position_z = writable(0.009-0.00125-0.003280)

export const bbox_rotation_x = writable(0)
export const bbox_rotation_y = writable(0)
export const bbox_rotation_z = writable(0)

// export const bbox_color_hex = writable("#ffff00") // // yellow
export const bbox_color_hex = writable("#808080") // // grey

// // mch demo
// export const boundingbox_x = 0.0;
// export const boundingbox_y = 0.0;
// export const boundingbox_z = 0.0;

// export const view_zoom = writable(2000)

// export const rotation_x = writable(90)
// export const rotation_y = writable(0)
// export const rotation_z = writable(0)


// // AS Demo // let color = 0x25509A;
// export const boundingbox_x = 0.0;
// export const boundingbox_y = 0.0;
// export const boundingbox_z = 0.0;

// export const view_zoom = writable(2000)

// export const rotation_x = writable(0)
// export const rotation_y = writable(0)
// export const rotation_z = writable(0)

// export const color_red = writable(37)
// export const color_green = writable(80)
// export const color_blue = writable(154)

// export const color_hex = writable('#25509A')


// // GH demo Flange
// export const boundingbox_x = writable(0.200);
// export const boundingbox_y = writable(0.200);
// export const boundingbox_z = writable(0.041);

// export const view_zoom = writable(2000)

// export const rotation_x = writable(0)
// export const rotation_y = writable(0)
// export const rotation_z = writable(0)


// // Helmet
// export const rotation_y = writable(-90)
// export const rotation_z = writable(0)