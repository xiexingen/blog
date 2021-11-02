export function getArray() {
  return [
    { id: 1, name: '部门1', pid: null },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 5 },
    { id: 7, name: '部门7', pid: 6 },
  ];
}

export function getTree() {
  return {
    id: 1,
    name: '部门1',
    pid: null,
    childrens: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        childrens: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            childrens: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
                childrens: [
                  {
                    id: 6,
                    name: '部门6',
                    pid: 5,
                    childrens: [
                      {
                        id: 7,
                        name: '部门7',
                        pid: 6,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}
