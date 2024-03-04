import React from 'react';
function MapDemo() {
  var list = [
    {
      name: "vinay",
      Age: 20,
    },
    {
      name: "Rahul",
      Age: 20,
    },
    {
      name: "JAY",
      Age: 20,
    },
    {
      name: "VARAJ",
      Age: 20,
    },
    {
      name: "JANVI",
      Age: 20,
    },
    {
      name: "DHRUV",
      Age: 20,
    },
    {
      name: "KSIHAN",
      Age: 20,
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
                <tbody>
                  {list.map((value, index, _arr) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td>
                            {"NAME IS " + value.name}
                            <br />
                          </td>
                          <td>{" AGE IS " + value.Age}</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
      </table>
    </div>
  );
}

export default MapDemo;
