import { schema } from "@scope/ws1";
import { a } from "@scope/ws2";

const b = schema.object({
    a: schema.string()
})

const c = schema.string()

a()

const d = b.parse({a:1})