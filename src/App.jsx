import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";

function App() {

  // Utilise des alias pour éviter les conflits de noms si plusieurs instances partagent la même clé (exemple : data).
  const { data: products, error: productsError, isLoading: productsLoading } = useFetch("https://fakestoreapi.com/products");
  const { data: users, error: usersError, isLoading: usersLoading } = useFetch("https://jsonplaceholder.typicode.com/users");

  console.log("Prod isLoading", productsLoading);
  console.log("Prod Data: ", products);
  console.log("Prod Error: ", productsError);

  console.log("Users isLoading", usersLoading);
  console.log("Users Data: ", users);
  console.log("Users Error: ", usersError);

  return (
    <div className="bg-stone-900 h-screen w-screen flex justify-center items-start">
      <Todo />
    </div>
  );
}

export default App;