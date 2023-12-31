import { writable } from 'svelte/store'

// % operator in javascript is een remainder, geen modulo
const modulo = (a: number, b: number) => { return ((a % b) + b) % b; }

export const env_color_xyz_red = writable(255)
export const env_color_xyz_green = writable(255)
export const env_color_xyz_blue = writable(0)

// export const env_xyz_color_hex = writable("#ffff00") // // yellow
export const env_xyz_color_hex = writable("#808080") // // grey
export const env_xyz_transparency = writable(true)
export const env_xyz_opacity = writable(0.315)


// // General demo: Production Line Envelop
export const productionline_env_xyz_x = writable(1.500)
export const productionline_env_xyz_y = writable(0.800)
export const productionline_env_xyz_z = writable(0.300)

export const xyz_zoom = writable(400)

// // General_Demo: A4_Plate
// export const sets_xyz = writable(1)
// export const rows_xyz = writable(2)
// export const columns_xyz = writable(5)
// export const traverses_xyz = writable(3)

// export const rotation_xyz_x = writable(90)
// export const rotation_xyz_y = writable(0)
// export const rotation_xyz_z = writable(0)

// export const position_xyz_dx = writable(0)
// export const position_xyz_dy = writable(0)
// export const position_xyz_dz = writable(0)

// export const spacing_xyz_x = writable(100)
// export const spacing_xyz_y = writable(100)
// export const spacing_xyz_z = writable(100)

// export const set_spacing_xyz_x = writable(100)

// // General_Demo: Impeller
export const row_sets_xyz = writable(1)
export const column_sets_xyz = writable(1)
export const grid_sets_xyz = writable(1)

export const rows_xyz = writable(6)
export const columns_xyz = writable(11)
export const traverses_xyz = writable(4)

export const rotation_xyz_x = writable(0)
export const rotation_xyz_y = writable(0)
export const rotation_xyz_z = writable(0)

export const position_xyz_dx = writable(0)
export const position_xyz_dy = writable(0)
export const position_xyz_dz = writable(-8)

export const spacing_xyz_x = writable(60)
export const spacing_xyz_y = writable(60)
export const spacing_xyz_z = writable(60)

export const set_spacing_xyz_x = writable(100)
export const set_spacing_xyz_y = writable(100)
export const set_spacing_xyz_z = writable(100)

// // Equipment
// // Equipment_1 Traverse
// // GH_Equipment
export const equip_1_node_name_xyz = 'xxx'
export const equip_1_model_name_xyz = '/models/.../xxx.glb'

export const equip_1_rows_xyz = writable(0)
export const equip_1_columns_xyz = writable(0)

export const equip_1_rotation_xyz_x = writable(0)
export const equip_1_rotation_xyz_y = writable(0)
export const equip_1_rotation_xyz_z = writable(0)

export const equip_1_position_xyz_dx = writable(0)
export const equip_1_position_xyz_dy = writable(0)
export const equip_1_position_xyz_dz = writable(0)

export const equip_1_spacing_xyz_x = writable(0)
export const equip_1_spacing_xyz_y = writable(0)
export const equip_1_spacing_xyz_z = writable(0)

// // Equipment_2
// // GH_Equipment
export const equip_2_node_name_xyz = 'xxx'
export const equip_2_model_name_xyz = '/models/.../xxx.glb'

export const equip_2_rows_xyz = writable(0)
export const equip_2_columns_xyz = writable(0)

export const equip_2_rotation_xyz_x = writable(0)
export const equip_2_rotation_xyz_y = writable(0)
export const equip_2_rotation_xyz_z = writable(0)

export const equip_2_position_xyz_dx = writable(0)
export const equip_2_position_xyz_dy = writable(0)
export const equip_2_position_xyz_dz = writable(0)

export const equip_2_spacing_xyz_x = writable(0)
export const equip_2_spacing_xyz_y = writable(0)
export const equip_2_spacing_xyz_z = writable(0)

// // Equipment_3
// // GH_Equipment
export const equip_3_node_name_xyz = 'xxx'
export const equip_3_model_name_xyz = '/models/.../xxx.glb'

export const equip_3_rows_xyz = writable(0)
export const equip_3_columns_xyz = writable(0)

export const equip_3_rotation_xyz_x = writable(0)
export const equip_3_rotation_xyz_y = writable(0)
export const equip_3_rotation_xyz_z = writable(0)

export const equip_3_position_xyz_dx = writable(0)
export const equip_3_position_xyz_dy = writable(0)
export const equip_3_position_xyz_dz = writable(0)

export const equip_3_spacing_xyz_x = writable(0)
export const equip_3_spacing_xyz_y = writable(0)
export const equip_3_spacing_xyz_z = writable(0)

// // Equipment_4 Anode
// // GH_Equipment
export const equip_4_node_name_xyz = 'xxx'
export const equip_4_model_name_xyz = '/models/.../xxx.glb'

export const equip_4_rows_xyz = writable(0)
export const equip_4_columns_xyz = writable(0)

export const equip_4_rotation_xyz_x = writable(0)
export const equip_4_rotation_xyz_y = writable(0)
export const equip_4_rotation_xyz_z = writable(0)

export const equip_4_position_xyz_dx = writable(0)
export const equip_4_position_xyz_dy = writable(0)
export const equip_4_position_xyz_dz = writable(0)

export const equip_4_spacing_xyz_x = writable(0)
export const equip_4_spacing_xyz_y = writable(0)
export const equip_4_spacing_xyz_z = writable(0)



// // // GH demo Flange
// export const productionline_env_xyz_x = writable(2.000)
// export const productionline_env_xyz_y = writable(1.100)
// export const productionline_env_xyz_z = writable(0.300)

// export const xyz_zoom = writable(400)

// // #1 Totaal 4 x 7 x 5 = 140 (+14 = +11.11%, +12 = +9.375%)
// export const sets_xyz = writable(1)
// export const rows_xyz = writable(4)
// export const columns_xyz = writable(7)
// export const traverses_xyz = writable(5)

// export const rotation_xyz_x = writable(0)
// export const rotation_xyz_y = writable(0)
// export const rotation_xyz_z = writable(0)

// export const position_xyz_dx = writable(0)
// export const position_xyz_dy = writable(0)
// export const position_xyz_dz = writable(0)

// export const spacing_xyz_x = writable(100)
// export const spacing_xyz_y = writable(100)
// export const spacing_xyz_z = writable(21)

// export const set_spacing_xyz_x = writable(130)


// // // Equipment
// // // Equipment_1 Traverse
// // // GH_Equipment
// export const equip_1_node_name_xyz = 'xxx'
// export const equip_1_model_name_xyz = '/models/.../xxx.glb'

// export const equip_1_rows_xyz = writable(0)
// export const equip_1_columns_xyz = writable(0)

// export const equip_1_rotation_xyz_x = writable(0)
// export const equip_1_rotation_xyz_y = writable(0)
// export const equip_1_rotation_xyz_z = writable(0)

// export const equip_1_position_xyz_dx = writable(0)
// export const equip_1_position_xyz_dy = writable(0)
// export const equip_1_position_xyz_dz = writable(0)

// export const equip_1_spacing_xyz_x = writable(0)
// export const equip_1_spacing_xyz_y = writable(0)
// export const equip_1_spacing_xyz_z = writable(0)

// // // Equipment_2
// // // GH_Equipment
// export const equip_2_node_name_xyz = 'xxx'
// export const equip_2_model_name_xyz = '/models/.../xxx.glb'

// export const equip_2_rows_xyz = writable(0)
// export const equip_2_columns_xyz = writable(0)

// export const equip_2_rotation_xyz_x = writable(0)
// export const equip_2_rotation_xyz_y = writable(0)
// export const equip_2_rotation_xyz_z = writable(0)

// export const equip_2_position_xyz_dx = writable(0)
// export const equip_2_position_xyz_dy = writable(0)
// export const equip_2_position_xyz_dz = writable(0)

// export const equip_2_spacing_xyz_x = writable(0)
// export const equip_2_spacing_xyz_y = writable(0)
// export const equip_2_spacing_xyz_z = writable(0)

// // // Equipment_3
// // // GH_Equipment
// export const equip_3_node_name_xyz = 'xxx'
// export const equip_3_model_name_xyz = '/models/.../xxx.glb'

// export const equip_3_rows_xyz = writable(0)
// export const equip_3_columns_xyz = writable(0)

// export const equip_3_rotation_xyz_x = writable(0)
// export const equip_3_rotation_xyz_y = writable(0)
// export const equip_3_rotation_xyz_z = writable(0)

// export const equip_3_position_xyz_dx = writable(0)
// export const equip_3_position_xyz_dy = writable(0)
// export const equip_3_position_xyz_dz = writable(0)

// export const equip_3_spacing_xyz_x = writable(0)
// export const equip_3_spacing_xyz_y = writable(0)
// export const equip_3_spacing_xyz_z = writable(0)

// // // Equipment_4 Anode
// // // GH_Equipment
// export const equip_4_node_name_xyz = 'xxx'
// export const equip_4_model_name_xyz = '/models/.../xxx.glb'

// export const equip_4_rows_xyz = writable(0)
// export const equip_4_columns_xyz = writable(0)

// export const equip_4_rotation_xyz_x = writable(0)
// export const equip_4_rotation_xyz_y = writable(0)
// export const equip_4_rotation_xyz_z = writable(0)

// export const equip_4_position_xyz_dx = writable(0)
// export const equip_4_position_xyz_dy = writable(0)
// export const equip_4_position_xyz_dz = writable(0)

// export const equip_4_spacing_xyz_x = writable(0)
// export const equip_4_spacing_xyz_y = writable(0)
// export const equip_4_spacing_xyz_z = writable(0)