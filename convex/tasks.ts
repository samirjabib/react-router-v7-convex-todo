import { v } from "convex/values";
import { query, mutation } from "./_generated/server";


export const listTasksQuery = query({
    handler: async (ctx) => {
        return ctx.db.query("tasks").collect();
    }
})


export const addTask = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        return ctx.db.insert("tasks", {
            title: args.title,
            completed: false,
        });
    }
})