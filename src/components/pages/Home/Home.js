import React from "react";

const Home = () => {
  return (
    <>
      <div class="container mt-3">
        <h2 className="text-center">TOURS</h2>
        <table class="table">
          <tbody>
            <tr>
              <td class="text-dark">JUL16</td>
              <td className="text-secondary">DETROIT, MI</td>
              <td  className="text-secondary">DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td  className="text-secondary">TORONTO,ON</td>
              <td  className="text-secondary">BUDWEISER STAGE</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL22</td>
              <td  className="text-secondary">BRISTOW, VA</td>
              <td  className="text-secondary">JIGGY LUBE LIVE</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL29</td>
              <td  className="text-secondary">PHOENIX, AZ</td>
              <td  className="text-secondary">AK-CHIN PAVILION</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>AUG01</td>
              <td  className="text-secondary">LAS VEGAS, NV</td>
              <td  className="text-secondary">T-MOBILE ARENA</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>AUG16</td>
              <td  className="text-secondary">CONCORD, CA</td>
              <td  className="text-secondary">CONCORD PAVILION</td>
              <td>
                <button type="button" className="btn btn-info text-white fw-bold">
                  BUY TICKETS
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
