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
        urlParams.set("checkindate", dayjs().format("YYYY-MM-DD"));
        urlParams.set(
          "checkoutdate",
          dayjs().add(6, "day").format("YYYY-MM-DD")
        );
      }
    }

    const departureDateParam = urlParams.get("departureTime");

    if (departureDateParam) {
      const departureDate = dayjs(departureDateParam, "YYYY-MM-DD");
      if (departureDate.isValid() && departureDate.isBefore(dayjs())) {
        urlParams.set("departureTime", dayjs().format("YYYY-MM-DD"));
        urlParams.set("returnTime", dayjs().add(6, "day").format("YYYY-MM-DD"));
      }
    }

    return decodeURIComponent(urlParams.toString());

    return href;
  }

  const newHref = getModifiedHref();

  return <a href={newHref} {...props} />;
}

export default AdvancedLink;
