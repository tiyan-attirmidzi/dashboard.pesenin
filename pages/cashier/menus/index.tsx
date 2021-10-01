export default function Menus() {
  return (
    <>
      <section className="dashboard-container overflow-auto">
        <section className="sidebar">
          <div className="content pt-50 pb-30 ps-30">

            <div className="user text-center pb-50 pe-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 459 459"
                width="90"
                height="90"
                className="img-fluid mb-20"
              >
                <path
                  fill="#FFA700"
                  d="M7076.31 5911.84c5.48.34 10.87-1.6 14.87-5.36 4.01-3.76 6.28-9.01 6.28-14.51.1-13.99.1-29.39.1-29.39 0-17.67 14.32-32 32-32h171.4c18.78 0 34 15.22 34 34v171.44c0 17.66-14.31 31.96-31.96 31.96h-29.43c-5.52 0-10.8 2.29-14.58 6.31a20.003 20.003 0 00-5.38 14.95c3.09 51.89-15.22 104.78-54.82 144.38-73.65 73.64-193.23 73.64-266.87 0-73.64-73.64-73.64-193.22 0-266.87 39.6-39.6 92.49-57.91 144.39-54.91zm21.25 61.82c0-10.27-7.78-18.87-17.99-19.9-42.23-3.97-85.88 10.15-118.19 42.46-57.38 57.38-57.38 150.55 0 207.94 57.39 57.38 150.56 57.38 207.94 0 32.31-32.31 46.43-75.96 42.36-118.18-1.03-10.16-9.59-17.89-19.8-17.89-17.64-.11-42.73-.11-42.73-.11-11.05 0-20 8.96-20 20v42.77a32.01 32.01 0 01-32 32h-60.36a34.04 34.04 0 01-24.05-9.95 34.05 34.05 0 01-9.96-24.05v-60.36c0-8.48 3.38-16.62 9.38-22.62 6-6 14.14-9.38 22.62-9.38h42.78c11.04 0 20-8.95 20-20v-42.73zm93.2 7.15c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm-12.5 6.25v35.28h-35.28v-35.28h35.28zm-7.49 7.49h-20.3v20.3h20.3v-20.3zm132.57-126.07c0-3.45-2.8-6.25-6.25-6.25h-47.78c-3.46 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.79 6.25 6.25 6.25h47.78c3.45 0 6.25-2.8 6.25-6.25v-47.78zm-112.58 0c0-3.45-2.79-6.25-6.25-6.25h-47.78c-3.45 0-6.25 2.8-6.25 6.25v47.78c0 3.45 2.8 6.25 6.25 6.25h47.78c3.46 0 6.25-2.8 6.25-6.25v-47.78zm100.08 6.25v35.28h-35.28v-35.28h35.28zm-112.58 0v35.28h-35.28v-35.28h35.28zm105.11 7.47h-20.35v20.34h20.35v-20.34zm-112.6.02h-20.3v20.3h20.3v-20.3z"
                  transform="translate(-10747.2 -2912.41) translate(3870.48 -2918.17)"
                />
              </svg>
              <h2 className="fw-bold text-xl color-palette-0 m-0">Cashier Pesenin</h2>
              <p className="color-palette-5 m-0">cashier@pesenin.id</p>
            </div>

            <div className="menus mt-30 pb-50 pe-30">

              <div className="col align-items-center text-lg text-secondary text-center">

                <div className="row pb-50">
                  <div className="h5 mb-3">Total Pesanan</div>
                  <div className="h2">740</div>
                </div>

                <div className="row pb-50">
                  <div className="h5 mb-3">Pesanan Diproses</div>
                  <div className="h2">324</div>
                </div>

                <div className="row pb-50">
                  <div className="h5 mb-3">Pesanan Selesai</div>
                  <div className="h2">1253</div>
                </div>

              </div>

            </div>

            <div className="sidebar-footer pt-73 pe-30">
              <a
                className="btn btn-sign-out w-100 fw-medium text-xs text-center text-white rounded-pill"
                href="/"
                role="button"
              >
                Keluar
              </a>
            </div>

          </div>
        </section>

        <main className="main-wrapper">

          <div className="ps-lg-0">

            <div className="d-flex justify-content-between mb-30">
              <a href="/cashier" className="btn btn-nav btn-status rounded-pill text-md">
                DAFTAR PESANAN
              </a>
              <a href="/cashier/histories" className="btn btn-nav btn-status rounded-pill text-md">
                RIWAYAT PESANAN
              </a>
              <a href="/cashier/tables" className="btn btn-nav btn-status rounded-pill text-md">
                MEJA
              </a>
              <a href="/cashier/menus" className="btn btn-nav btn-status rounded-pill text-md btn-active">
                DAFTAR MENU
              </a>
              <a href="/cashier/waiters" className="btn btn-nav btn-status rounded-pill text-md">
                PELAYANAN
              </a>
            </div>

            <div className="menu-lists mb-30">
              <div className="container">

                <div className="main-content main-content-table overflow-auto">

                  <div className="row my-3">
                    <div className="col-10">
                      <input
                        type="search"
                        className="form-control rounded-pill border border-2"
                        placeholder="Cari..."
                        id="search"
                      />
                    </div>
                    <div className="col-2">
                      <div className="float-end">
                        <a
                          href="./menus-create.html"
                          type="button"
                          className="btn btn-primary rounded-pill"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                            />
                          </svg>
                          {' '}
                          Tambah
                        </a>
                      </div>
                    </div>
                  </div>

                  <table className="table table-borderless">
                    <thead>
                      <tr className="color-palette-0">
                        <th className="" scope="col">Nama</th>
                        <th scope="col">Section</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Status</th>
                        <th scope="col">Opsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-category="pending" className="align-middle">
                        <th scope="row">
                          <img
                            className="float-start me-3 mb-lg-0 mb-3 rounded-3"
                            src="/images/food-placeholder.png"
                            width="80"
                            height="60"
                            alt="Menu Image"
                          />
                          <div className="menu-title-header">
                            <p className="menu-title fw-medium text-start color-palette-0 m-0">
                              Udang
                              Kipas Asam Manis

                            </p>
                            <p className="text-xs fw-normal text-start color-palette-5 m-0">Udang</p>
                          </div>
                        </th>
                        <td>
                          <p className="fw-medium color-palette-0 m-0">Sauteed</p>
                        </td>
                        <td>
                          <p className="fw-medium color-palette-0 m-0">Rp 40.000</p>
                        </td>
                        <td>
                          <span className="float-start icon-status available" />
                          <p className="fw-medium text-start color-palette-0 m-0 position-relative">
                            Tersedia

                          </p>
                        </td>
                        <td>
                          <a
                            href="./menus-detail.html"
                            className="btn btn-primary rounded-pill text-sm"
                          >
                            Details

                          </a>
                        </td>
                      </tr>
                      <tr data-category="success" className="align-middle">
                        <th scope="row">
                          <img
                            className="float-start me-3 mb-lg-0 mb-3 rounded-3"
                            src="/images/placeholder-food.png"
                            width={80}
                            height={60}
                            alt="Menu Image"
                          />
                          <div className="menu-title-header">
                            <p className="menu-title fw-medium text-start color-palette-0 m-0">
                              Ikan
                              Bakar Katamba

                            </p>
                            <p className="text-xs fw-normal text-start color-palette-5 m-0">
                              Ikan Bakar
                            </p>
                          </div>
                        </th>
                        <td>
                          <p className="fw-medium color-palette-0 m-0">Grill Cuisine</p>
                        </td>
                        <td>
                          <p className="fw-medium color-palette-0 m-0">Rp 55.000</p>
                        </td>
                        <td>
                          <span className="float-start icon-status not-available" />
                          <p className="fw-medium text-start color-palette-0 m-0 position-relative">
                            Tidak Tersedia

                          </p>
                        </td>
                        <td>
                          <a
                            href="./menus-detail.html"
                            className="btn btn-primary rounded-pill text-sm"
                          >
                            Details

                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <nav aria-label="Pagination Menus">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          // tabindex="-1"
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>

                </div>

              </div>
            </div>

          </div>

        </main>

      </section>
    </>
  );
}