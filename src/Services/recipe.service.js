export function getRecipesByName(name){
    return [
        {
            name : "Grandma's Famous Cookies",
            id: 1,
            rating : 9.7,
            included: true,
            ingredients: [
                {
                    ingredient: 'Flour',
                    quantity: 1.6,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Sugar',
                    quantity: 1.5,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Eggs',
                    quantity: 1,
                    unitOfMeasure: 'large'
                },
                {
                    ingredient: 'Chocolate Chips',
                    quantity: 2.5,
                    unitOfMeasure: 'cup'
                },
            ],
        },
        {
            name : "Simple Chocolate Chip Cookies",
            id: 2,
            rating : 7.5,
            included: true,
            ingredients: [
                {
                    ingredient: 'Flour',
                    quantity: 2.5,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Sugar',
                    quantity: 1.75,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Eggs',
                    quantity: 1,
                    unitOfMeasure: 'large'
                },
                {
                    ingredient: 'Chocolate Chips',
                    quantity: 2,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Pecans',
                    quantity: 1,
                    unitOfMeasure: 'cup'
                },
            ],
        },
        {
            name : "Best Chocolate Chip Cookies",
            id: 3,
            rating : 8,
            included: true,
            ingredients: [
                {
                    ingredient: 'Flour',
                    quantity: 4,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Sugar',
                    quantity: 1.5,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Eggs',
                    quantity: 2,
                    unitOfMeasure: 'large'
                },
                {
                    ingredient: 'Chocolate Chips',
                    quantity: 2.25,
                    unitOfMeasure: 'cup'
                },
                {
                    ingredient: 'Walnuts',
                    quantity: 1,
                    unitOfMeasure: 'cup'
                },
            ],
        }
    ]
}

export function aggregateRecipes(recipes) {
    recipes = recipes.filter(r => r.included)
    let groupedIngredients = recipes.map(r => r.ingredients).flat().reduce((group, current) => {
        if(!(current.ingredient in group)){
            group[current.ingredient] = {
                ingredient:current.ingredient,
                unitOfMeasure: current.unitOfMeasure,
                quantities: []
            }
        }
        group[current.ingredient].quantities.push(current.quantity)
        return group
    }, {})

    const ingredientList = []
    for(let ingredientName in groupedIngredients){
        const ingredient = groupedIngredients[ingredientName]
        ingredientList.push({
            ingredient: ingredient.ingredient,
            quantity: `${ingredient.quantities.reduce((total, current) => total + current, 0)/ingredient.quantities.length} ${ingredient.unitOfMeasure}`,
            quantityRange: `${Math.min(...ingredient.quantities)} - ${Math.max(...ingredient.quantities)} ${ingredient.unitOfMeasure}`,
            useRate: `${ingredient.quantities.length/recipes.length}`
        }
        )
    }
    return ingredientList
}