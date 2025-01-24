import dayjs from "dayjs";
import { ComponentProps } from "react";

interface AdvancedLinkProps extends ComponentProps<"a"> {}

function AdvancedLink({ href, ...props }: AdvancedLinkProps) {
  function getModifiedHref() {
    if (!href) return href;

    const urlParams = new URLSearchParams(href);

    const checkInDataParam = urlParams.get("checkindate");

    if (checkInDataParam) {
      const checkInData = dayjs(checkInDataParam, "YYYY-MM-DD");
      if (checkInData.isValid() && checkInData.isBefore(dayjs())) {
        urlParams.set(
          "checkindate",
          dayjs().add(1, "week").format("YYYY-MM-DD")
        );
        urlParams.set(
          "checkoutdate",
          dayjs().add(1, "week").add(1, "day").format("YYYY-MM-DD")
        );
      }
    }

    const departureDateParam = urlParams.get("departureTime");

    if (departureDateParam) {
      const departureDate = dayjs(departureDateParam, "YYYY-MM-DD");
      if (departureDate.isValid() && departureDate.isBefore(dayjs())) {
        urlParams.set(
          "departureTime",
          dayjs().add(1, "week").format("YYYY-MM-DD")
        );
        urlParams.set(
          "returnTime",
          dayjs().add(1, "week").add(1, "day").format("YYYY-MM-DD")
        );
      }
    }

    const checkInDateParam2 = urlParams.get("checkInDate");

    if (checkInDateParam2) {
      const checkInData = dayjs(checkInDateParam2, "YYYY-MM-DD");
      if (checkInData.isValid() && checkInData.isBefore(dayjs())) {
        urlParams.set(
          "checkInDate",
          dayjs().add(1, "week").format("YYYY-MM-DD")
        );
        urlParams.set(
          "checkOutDate",
          dayjs().add(1, "week").add(1, "day").format("YYYY-MM-DD")
        );
      }
    }

    const checkInDateParam3 = urlParams.get("checkinDate");

    if (checkInDateParam3) {
      const checkInData = dayjs(checkInDateParam3, "YYYY-MM-DD");
      if (checkInData.isValid() && checkInData.isBefore(dayjs())) {
        urlParams.set(
          "checkinDate",
          dayjs().add(1, "week").format("YYYY-MM-DD")
        );

        const isTourLink = href.includes("tour");

        urlParams.set(
          "checkoutDate",
          dayjs().add(1, isTourLink ? "year" : "week").format("YYYY-MM-DD")
        );
      }
    }

    if (
      checkInDataParam ||
      checkInDateParam2 ||
      checkInDateParam3 ||
      departureDateParam
    )
      return decodeURIComponent(urlParams.toString());
    return href;
  }

  const newHref = getModifiedHref();

  return <a href={newHref} {...props} />;
}

export default AdvancedLink;
