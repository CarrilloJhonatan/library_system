import "../App.css";
import { MdDashboard } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {RiArrowRightSLine} from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div>
        <Logo></Logo>
        <Menu></Menu>
      </div>
  );
};

const Logo = () => {
  //El contenedor del logo
  return (
    <img
      className="py-8"
      src="../../src/assets/Logo-Notifier.png"
      alt="notifier"
    />
  );
};

const Menu = () => {
  //El contenedor del logo
  return (
    <nav>
      <ul className="p-6">
        <li>
          <a
            href="dashboard"
            className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
          >
            <MdDashboard />
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2  text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
          >
            <MenuInventario />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2  text-gray-700 hover:text-blue-600  font-bold rounded-lg transition-colors"
          >
            <MenuPedidos />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 gap-2  text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
          >
            <IoIosDocument />
            Reporte
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 gap-2  text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
          >
            <IoMdSettings />
            Configuración
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-4 gap-2  text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
          >
            <RiLogoutCircleRLine/> Cerrar sesión
          </a>
        </li>
      </ul>
    </nav>
  );
};
const MenuPedidos = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div>
      <a
        href="#"
        onClick={toggleMenu}
        className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
      >
        <MdNoteAlt />
        Libros
        <RiArrowRightSLine
                  className={`mt-1 ${
                    mostrarMenu && "rotate-90"
                  } transition-all`}
                  />
      </a>
      {mostrarMenu && (
        <ul className="pl-6">
          <li>
            <a
              href="#"
              className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
            >
              Lista de Libros
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
            >
              Completados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
            >
              Cancelados
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

const MenuInventario = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div>
      <a
        href="#"
        onClick={toggleMenu}
        className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
      >
        <MdOutlineInventory />
        Inventario
        <RiArrowRightSLine
                  className={`mt-1 ${
                    mostrarMenu && "rotate-90"
                  } transition-all`}
                  />
      </a>
      {mostrarMenu && (
        <ul className="pl-6">
          <li>
            <a
              href="#"
              className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-4 gap-2 text-gray-700 hover:text-blue-600  active:text-blue-600 font-bold rounded-lg transition-colors"
            >
              Categorias
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};


export default Sidebar;