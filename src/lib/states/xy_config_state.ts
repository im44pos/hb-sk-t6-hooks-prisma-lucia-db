import { writable } from 'svelte/store'

// % operator in javascript is een remainder, geen modulo
const modulo = (a: number, b: number) => { return ((a % b) + b) % b; }

export const env_color_xy_red = writable(255)
export const env_color_xy_green = writable(255)
export const env_color_xy_blue = writable(0)

// export const env_xy_color_hex = writable("#ffff00") // // yellow
export const env_xy_color_hex = writable("#808080") // // grey
export const env_xy_transparency = writable(true)
export const env_xy_opacity = writable(0.315)


// // General_Demo: Production Line Envelop
export const productionline_env_xy_x = writable(1.500)
export const productionline_env_xy_y = writable(0.800)
export const productionline_env_xy_z = writable(0.300)

export const xy_zoom = writable(400)

// // General_Demo: A4_Plate
// export const object_node_name = 'Open_CASCADE_STEP_translator_75_7'
// export const object_model_name = '/models/demo_models/CA160_plate_A4.glb'

// export const xy_zoom = writable(400)

// export const sets_xy = writable(1)
// export const rows_xy = writable(2)
// export const columns_xy = writable(5)

// export const rotation_xy_x = writable(90)
// export const rotation_xy_y = writable(0)
// export const rotation_xy_z = writable(0)

// export const position_xy_dx = writable(0)
// export const position_xy_dy = writable(0)
// export const position_xy_dz = writable(0)

// export const spacing_xy_x = writable(100)
// export const spacing_xy_y = writable(100)
// export const spacing_xy_z = writable(0)

// export const set_spacing_xy_x = writable(100)


// // General_Demo: Impeller
export const row_sets_xy = writable(1)
export const column_sets_xy = writable(1)

export const rows_xy = writable(6)
export const columns_xy = writable(11)

export const rotation_xy_x = writable(0)
export const rotation_xy_y = writable(0)
export const rotation_xy_z = writable(0)

export const position_xy_dx = writable(0)
export const position_xy_dy = writable(0)
export const position_xy_dz = writable(-8)

export const spacing_xy_x = writable(60)
export const spacing_xy_y = writable(60)
export const spacing_xy_z = writable(0)

export const set_spacing_xy_x = writable(200)
export const set_spacing_xy_y = writable(200)

// // Equipment
// // Equipment_1 Traverse
// // GH_Equipment
export const equip_1_node_name_xy = 'xxx'
export const equip_1_model_name_xy = '/models/equipment/xxx.glb'

export const equip_1_rows_xy = writable(0)
export const equip_1_columns_xy = writable(0)

export const equip_1_rotation_xy_x = writable(0)
export const equip_1_rotation_xy_y = writable(0)
export const equip_1_rotation_xy_z = writable(0)

export const equip_1_position_xy_dx = writable(0)
export const equip_1_position_xy_dy = writable(0)
export const equip_1_position_xy_dz = writable(0)

export const equip_1_spacing_xy_x = writable(0)
export const equip_1_spacing_xy_y = writable(0)
export const equip_1_spacing_xy_z = writable(0)

// // Equipment_2
// // GH_Equipment
export const equip_2_node_name_xy = 'xxx'
export const equip_2_model_name_xy = '/models/equipment/xxx.glb'

export const equip_2_rows_xy = writable(0)
export const equip_2_columns_xy = writable(0)

export const equip_2_rotation_xy_x = writable(0)
export const equip_2_rotation_xy_y = writable(0)
export const equip_2_rotation_xy_z = writable(0)

export const equip_2_position_xy_dx = writable(0)
export const equip_2_position_xy_dy = writable(0)
export const equip_2_position_xy_dz = writable(0)

export const equip_2_spacing_xy_x = writable(0)
export const equip_2_spacing_xy_y = writable(0)
export const equip_2_spacing_xy_z = writable(0)

// // Equipment_3
// // GH_Equipment
export const equip_3_node_name_xy = 'xx'
export const equip_3_model_name_xy = '/models/equipment/xxx.glb'

export const equip_3_rows_xy = writable(0)
export const equip_3_columns_xy = writable(0)

export const equip_3_rotation_xy_x = writable(0)
export const equip_3_rotation_xy_y = writable(0)
export const equip_3_rotation_xy_z = writable(0)

export const equip_3_position_xy_dx = writable(0)
export const equip_3_position_xy_dy = writable(0)
export const equip_3_position_xy_dz = writable(0)

export const equip_3_spacing_xy_x = writable(0)
export const equip_3_spacing_xy_y = writable(0)
export const equip_3_spacing_xy_z = writable(0)

// // Equipment_4 Anode
// // GH_Equipment
export const equip_4_node_name_xy = 'xxx'
export const equip_4_model_name_xy = '/models/.../xxx.glb'

export const equip_4_rows_xy = writable(0)
export const equip_4_columns_xy = writable(0)

export const equip_4_rotation_xy_x = writable(0)
export const equip_4_rotation_xy_y = writable(0)
export const equip_4_rotation_xy_z = writable(0)

export const equip_4_position_xy_dx = writable(0)
export const equip_4_position_xy_dy = writable(0)
export const equip_4_position_xy_dz = writable(0)

export const equip_4_spacing_xy_x = writable(0)
export const equip_4_spacing_xy_y = writable(0)
export const equip_4_spacing_xy_z = writable(0)




// // MCH_Demo: PC Production Line Envelop
// export const productionline_env_xy_x = writable(6.000)
// export const productionline_env_xy_y = writable(2.750)
// export const productionline_env_xy_z = writable(0.800)

// // // MCH_Demo: PC 03_DYNA_01_00_G
// export const object_node_name = '03_DYNA_01_00_G_stlstl'
// export const object_model_name = '/models/mch_models/CA160_03_DYNA_01_00_G_stl.glb'

// export const xy_zoom = writable(200)

// export const rows_xy = writable(5)
// export const columns_xy = writable(11)

// export const rotation_xy_x = writable(90)
// export const rotation_xy_y = writable(0)
// export const rotation_xy_z = writable(0)
// // export const rotation_xy_z = writable(modulo(-50, 360))

// export const position_xy_dx = writable(95)
// export const position_xy_dy = writable(-32.5)
// export const position_xy_dz = writable(0)

// export const spacing_xy_x = writable(50)
// export const spacing_xy_y = writable(50)
// export const spacing_xy_z = writable(0)


// // // AS demo
// export const object_node_name = ''
// export const object_model_name = '/models/as_models/Doseerring_54mm-transformed.glb'

// export const xy_zoom = writable(400)

// export const rows_xy = writable(5)
// export const columns_xy = writable(11)

// export const rotation_xy_x = writable(90)
// export const rotation_xy_y = writable(0)
// export const rotation_xy_z = writable(0)
// // export const rotation_xy_z = writable(modulo(-50, 360))

// export const position_xy_dx = writable(0)
// export const position_xy_dy = writable(0)
// export const position_xy_dz = writable(0)

// export const spacing_xy_x = writable(0)
// export const spacing_xy_y = writable(0)
// export const spacing_xy_z = writable(0)

// '/models/as_models/h72920-24jan2023.glb'


// // // GH_Demo: Zn/Ni Production Line Envelop
// export const productionline_env_xy_x = writable(2.000)
// export const productionline_env_xy_y = writable(1.100)
// export const productionline_env_xy_z = writable(0.300)

// // // GH_Demo: Zn/Ni Flange
// export const object_node_name = '111191-C_203stl'
// export const object_model_name = '/models/gh_models/111191-C_203.glb'

// export const xy_zoom = writable(400)

// export const sets_xy = writable(3)
// export const rows_xy = writable(4)
// export const columns_xy = writable(2)

// export const rotation_xy_x = writable(0)
// export const rotation_xy_y = writable(0)
// export const rotation_xy_z = writable(0)

// export const position_xy_dx = writable(70)
// export const position_xy_dy = writable(0)
// export const position_xy_dz = writable(0)

// export const spacing_xy_x = writable(120)
// export const spacing_xy_y = writable(100)
// export const spacing_xy_z = writable(0)

// export const set_spacing_xy_x = writable(130)


// // // Equipment
// // // Equipment_1 Traverse
// // // GH_Equipment
// export const equip_1_node_name_xy = 'xxx'
// export const equip_1_model_name_xy = '/models/gh_equipment/xxx.glb'

// export const equip_1_rows_xy = writable(0)
// export const equip_1_columns_xy = writable(0)

// export const equip_1_rotation_xy_x = writable(0)
// export const equip_1_rotation_xy_y = writable(0)
// export const equip_1_rotation_xy_z = writable(0)

// export const equip_1_position_xy_dx = writable(0)
// export const equip_1_position_xy_dy = writable(0)
// export const equip_1_position_xy_dz = writable(0)

// export const equip_1_spacing_xy_x = writable(0)
// export const equip_1_spacing_xy_y = writable(0)
// export const equip_1_spacing_xy_z = writable(0)

// // // Equipment_2
// // // GH_Equipment
// export const equip_2_node_name_xy = 'strip_1100x25stl'
// export const equip_2_model_name_xy = '/models/gh_equipment/strip_1100x25.glb'

// export const equip_2_rows_xy = writable(1)
// export const equip_2_columns_xy = writable(4)

// export const equip_2_rotation_xy_x = writable(90)
// export const equip_2_rotation_xy_y = writable(0)
// export const equip_2_rotation_xy_z = writable(0)

// export const equip_2_position_xy_dx = writable(25)
// export const equip_2_position_xy_dy = writable(-1100/2)
// export const equip_2_position_xy_dz = writable(-26)

// export const equip_2_spacing_xy_x = writable(650)
// export const equip_2_spacing_xy_y = writable(0)
// export const equip_2_spacing_xy_z = writable(0)

// // // Equipment_3
// // // GH_Equipment
// export const equip_3_node_name_xy = 'strip_650x25stl'
// export const equip_3_model_name_xy = '/models/gh_equipment/strip_650x25.glb'

// export const equip_3_rows_xy = writable(4)
// export const equip_3_columns_xy = writable(3)

// export const equip_3_rotation_xy_x = writable(90)
// export const equip_3_rotation_xy_y = writable(0)
// export const equip_3_rotation_xy_z = writable(0)

// export const equip_3_position_xy_dx = writable(25+650/2)
// export const equip_3_position_xy_dy = writable(-25/2)
// export const equip_3_position_xy_dz = writable(-26+10)

// export const equip_3_spacing_xy_x = writable(650+0)
// export const equip_3_spacing_xy_y = writable(300)
// export const equip_3_spacing_xy_z = writable(0)

// // // Equipment_4 Anode
// // // GH_Equipment
// export const equip_4_node_name_xy = 'xxx'
// export const equip_4_model_name_xy = '/models/.../xxx.glb'

// export const equip_4_rows_xy = writable(0)
// export const equip_4_columns_xy = writable(0)

// export const equip_4_rotation_xy_x = writable(0)
// export const equip_4_rotation_xy_y = writable(0)
// export const equip_4_rotation_xy_z = writable(0)

// export const equip_4_position_xy_dx = writable(0)
// export const equip_4_position_xy_dy = writable(0)
// export const equip_4_position_xy_dz = writable(0)

// export const equip_4_spacing_xy_x = writable(0)
// export const equip_4_spacing_xy_y = writable(0)
// export const equip_4_spacing_xy_z = writable(0)