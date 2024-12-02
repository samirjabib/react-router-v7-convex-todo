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


export const updateTask = mutation({
    args: {
        id: v.id("tasks"),
        completed: v.boolean(),
    },
    handler: async (ctx, args) => {
        return ctx.db.patch(args.id, {
            completed: args.completed,
        });
    }
})

export const deleteTask = mutation({
    args: {
        id: v.id("tasks"),
    },
    handler: async (ctx, args) => {
        return ctx.db.delete(args.id);
    }
})