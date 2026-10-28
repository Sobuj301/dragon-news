import Link from "next/link";

const SideBarCategories = ({ categories, activeId}) => {

    return (
        <ul className="flex flex-col gap-3">
            {
                categories.map(category => (
                    <li
                        key={category.category_id}
                        className={`${activeId === category.category_id && "bg-blue-50"} p-3 text-center`}
                    >
                        <Link className="block" href={`/category/${category.category_id}`}>
                            {category.category_name}
                        </Link>
                    </li>))
            }
        </ul>
    );
};
export default SideBarCategories;