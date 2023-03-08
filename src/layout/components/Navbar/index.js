import El from '../../../library/El';
// import { Button } from "../../../components/shared/Button";

export const Navbar = () => {
  return El({
    element: 'nav',
    child: El({
      element: 'div',
      className: 'flex py-4 items-center bg-blue-700',
      child: [
        El({
          element: 'div',
          child: [
            El({
              element: 'button',
              child: [
                El({
                  element: 'ion-icon',
                  name: 'add',
                  className: 'text-white items-end ml-1 align-middle',
                }),
              ],
            }),
            El({
              element: 'button',
              child: [
                El({
                  element: 'ion-icon',
                  name: 'filter-circle',
                  className: 'text-white items-end ml-1 align-middle',
                }),
              ],
            }),
            El({
              element: 'input',
              type: 'text',
              placeholder: 'Search',
            }),
          ],
        }),
        El({}),
      ],
    }),
  });
};
