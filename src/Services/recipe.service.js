export function getRecipesByName(name){
    return [
        {
            name : "Grandma's Famous Cookies",
            rating : 9.7,
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
            name : "Simple Chocolate Chip Cookeis",
            rating : 7.5,
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
        }
    ]
}

export function aggregateRecipes(recipes) {
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