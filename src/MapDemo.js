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
      name: "KSIHAn",
      Age: 20,
    },
  ];
  return (
    <>
      <div style={{ Align: "center" }}>
        <table
          style={{ textAlign: "center" }}
        >
          {list.map((value, index, arr) => {
            return (
              <>
                <tr>
                  <td>
                    {"NAME IS " + value.name}
                    {" AGE IS " + value.Age}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default MapDemo;
