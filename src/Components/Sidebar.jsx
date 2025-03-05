import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
    { name: "Antdesign", path: "/antdesign" },
    { name: "MeterialUi", path: "/meterialui" },

  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded ${
                    isActive ? "bg-gray-600" : "hover:bg-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
