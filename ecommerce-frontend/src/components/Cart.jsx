import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div>
      <Badge badgeContent="" color="error">
        <i
          class="bi bi-cart pink"
          onClick={toggleShow}
          style={{ fontSize: 25 }}
        ></i>
      </Badge>
      <Offcanvas show={show} onHide={handleClose} placement="end" scroll="true">
        <Offcanvas.Header>
          <p
            class="offcanvas-title fs-4 dark-blue"
            id="offcanvasWithBothOptionsLabel"
          >
            МИНИЙ САГС
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="border-0 bg-white hstack "
          >
            ХААХ<CloseIcon className="fs-5"></CloseIcon>
          </button>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <p className="text-center text-secondary">Сагс хоосон.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
