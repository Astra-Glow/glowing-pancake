export const Schema = z.object({
  雨予: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(25),
    信赖值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(30),
  }).prefault({}),
});
export type Schema = z.output<typeof Schema>;
