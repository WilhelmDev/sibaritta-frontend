import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    experience: {
        "id": 0,
        "branch_id": 0,
        "slug": "",
        "name": "",
        "description": "",
        "address": "",
        "dress_code": "",
        "regular_price": "",
        "duration": "",
        "cancelation": "",
        "parking": "",
        "aditionals": "",
        "age": "",
        "status": "",
        "thumbnail": "",
        "gallery": "",
        "fk_category": 0,
        "seats": 0,
        "events": [

        ],
        "images": [],
        "suggestions": [

        ]
    }
}

const partnerSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        seteEvents: (state, action) => {
            state.experience.events = [...state.experience.events, action.payload];
        },
        setEditEvents: (state, action) => {
            state.experience.events = state.experience.events.map((event: any) => {
                if (event.id === action.payload.id) {
                    return action.payload;
                }
                return event;
            });
        },
        setStatePartner: (state, action) => {

            state.experience = action.payload;

        },

        setTitleExp: (state, action) => {

            state.experience = action.payload;

        }

    },
});

export const {
    setStatePartner,
    seteEvents,
    setTitleExp,
    setEditEvents
} = partnerSlice.actions;

export default partnerSlice.reducer;
