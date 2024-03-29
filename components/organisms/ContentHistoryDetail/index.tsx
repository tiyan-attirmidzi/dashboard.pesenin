import cx from 'classnames';
import {
  OrderStatus,
  OrderType,
  OrderVia,
  ReservationConfirmServingType,
  ReservationServingType,
} from '../../../config/constans';
import convertDate from '../../../config/convertdate';
import { OrderItemTypes, OrderTypes } from '../../../services/data-types';
import NavButtonCreate from '../../molecules/NavButtonCreate';
import BillingDetail from './BillingDetail';
import TableRow from './TableRow';

interface ContentHistoryDetailProps {
  data: OrderTypes;
}

export default function ContentHistoryDetail(props: ContentHistoryDetailProps) {
  const { data } = props;

  const rowClass = cx({
    'row-6': data.type === OrderType.dinein,
    'row-4': data.type === OrderType.reservation,
  });

  return (
    <div className="order-detail mb-30">
      <div className="container">
        <div className="main-content main-content-card overflow-auto">
          <section className="detail mx-auto">
            <div className="d-flex justify-content-between">
              <NavButtonCreate hrefBack="/cashier/histories" />
              <div className="my-auto">
                {data.type === OrderType.dinein ? (
                  <span className="badge bg-danger">DINE-IN</span>
                ) : (
                  <span className="badge bg-primary">RESERVATION</span>
                )}
              </div>
            </div>
            <div className="container mt-10">
              <div className="d-flex justify-content-between mx-3 mb-3">
                <div className={rowClass}>
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.email : data.guest !== null ? data.guest.checkin_number : '-'}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{data.customer !== null ? data.customer.fullname : data.guest !== null ? data.guest.name : '-'}</p>
                  <p className="text-sm color-palette-5 m-0">{data.customer !== null ? data.customer.phone : data.guest !== null ? data.guest.device_detection : '-'}</p>
                  <p className="text-sm color-palette-0 m-0">
                    {data.table === null ? 'Meja ' : data.table.section.name}
                    <strong>
                      {data.table === null ? 'Menunggu' : ` No. ${data.table.number}`}
                    </strong>
                  </p>
                  {data?.status === OrderStatus.new ? (
                    <span className="badge bg-danger">BARU</span>
                  ) : data?.status === OrderStatus.processed ? (
                    <span className="badge bg-theme text-white">PROSES</span>
                  ) : (
                    <span className="badge bg-success">SELESAI</span>
                  )}
                </div>
                <div className={rowClass}>
                  <p className="text-xl color-palette-0 fw-medium m-0">{data.order_number}</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.createdAt, 'dd')}</p>
                  <p className="text-sm color-palette-0 m-0">{data.waiter === null ? 'Pelayan Belum Diinputkan' : data.waiter.users.fullname}</p>
                  <p className="text-sm color-palette-5 m-0">{data.waiter === null ? 'Pelayan Belum Diinputkan' : data.waiter.users.email}</p>
                  {data.via === OrderVia.guest || data.via === OrderVia.customer ? (
                    <span className="badge bg-theme text-white">Pemesanan Via Pelanggan</span>
                  ) : (
                    <span className="badge bg-secondary">Pemesanan Via Waiter</span>
                  )}
                </div>
                {data.type === OrderType.reservation && (
                <div className={rowClass}>
                  <p className="text-xl color-palette-0 fw-medium m-0">Reservasi</p>
                  <p className="text-md color-palette-0 fw-medium m-0">{convertDate(data.reservation.datetime_plan, 'dd')}</p>
                  <p className="text-sm color-palette-5 m-0">
                    Jumlah Pelanggan Sebanyak
                    {' '}
                    <b>{data.reservation.number_of_people}</b>
                    {' '}
                    Orang
                  </p>
                  {data.reservation.serving_type === ReservationServingType.ontime ? (
                    <span className="badge bg-danger">ON-TIME</span>
                  ) : (
                    <span className="badge bg-primary">BY CONFIRMATION</span>
                  )}
                  <br />
                  {data.reservation.reservation_confirm === null ? (
                    <span />
                  ) : data.reservation.reservation_confirm
                      === ReservationConfirmServingType.waiting ? (
                        <span className="badge bg-secondary">Menunggu Konfirmasi Pelanggan</span>
                    ) : (
                      <span className="badge bg-success">Telah Dikonfirmasi Oleh Pelanggan</span>
                    )}
                </div>
                )}
              </div>
              <hr />
              <table className="table table-borderless color-palette-0">
                <thead>
                  <tr>
                    <th scope="col">Produk</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.order_items.map((item: OrderItemTypes) => (
                    <TableRow
                      key={item._id}
                      id={item._id}
                      productName={item.product.name}
                      quantity={item.qty}
                      price={item.price}
                      total={item.total}
                    />
                  ))}
                </tbody>
              </table>
              <hr />
              <div className="d-flex justify-content-around text-center mx-3 mb-3">
                <BillingDetail label="Subtotal" bill={data.total_price} />
                <BillingDetail label="PPN 10%" bill={data.tax} />
                <BillingDetail label="Total Pembayaran" bill={data.total_overall} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
