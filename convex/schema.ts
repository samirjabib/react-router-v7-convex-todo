import { v } from 'convex/values'

import { defineSchema, defineTable, } from "convex/server";

const schema = defineSchema({
    tasks: defineTable({
        title: v.string(),
        completed: v.boolean()
    })
});

export default schema;
