import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS =[
    {
        id: 'm1',
        name: 'BBQ Crawfish Sandwich',
        description: 'Chopped, grilled burdock root "crawfish" smothered in our bayou BBQ sauce. Sandwich comes on a pretzel bun with Cajun Remoulade sauce. Protein contains soy.',
        price: 13,
      },
      {
        id: 'm2',
        name: 'Burrito Bowl',
        description: 'Seasoned rice, black beans, tomato, "cheese", and "sour cream". NO LONGER served with flour tortilla, NOW SERVED as a burrito bowl. (gluten free) ',
        price: 12.5,
      },
      {
        id: 'm3',
        name: 'BBQ Riblets',
        description: 'Lotus root and fermented soy blend riblets in our homemade BBQ sauce. Come with two sides.',
        price: 19.99,
      },
      {
        id: 'm4',
        name: 'Baked Mac & Cheese ',
        description: 'Oven Roasted Vegan Mac and Cheese',
        price: 18.99,
      },

];



const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
        key={meal.id} 
        id = {meal.id}
        name ={meal.name}
        description = {meal.description}
        price = {meal.price}
    />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;