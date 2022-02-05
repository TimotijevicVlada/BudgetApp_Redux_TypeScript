
type Total = number

export const CountBudget = (total: Total) => ({
    type: "COUNT_BUDGET",
    payload: total
})