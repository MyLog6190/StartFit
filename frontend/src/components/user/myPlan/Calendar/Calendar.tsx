import { getPlan } from "@/api/user";
import { myPlanAtom, selectedDate } from "@/store/atom";
import { ResponseBody } from "@/types/response";
import { GetPlanResponseDto } from "@/types/response/user";
import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CalendarContainer,
  CalendarDays,
  CalendarDaysItems,
  CalendarHeader,
  CalendarWeekDay,
  CalendarWeekDayItems,
  EmptyBox,
  MonthChangeBtn,
  MonthPicker,
  ShowCalendarDate,
  ShowDate,
} from "./Calendar.style";
import { serverErrorMessage } from "@/common/error/error-message";
import { ResponseCode } from "@/common/enum";
import { useLocation } from "react-router-dom";

const getFirstDayOfMonth = (date: Temporal.PlainDate, month: number) => {
  return Temporal.Calendar.from(date)
    .dateFromFields(date)
    .with({ month: month, day: 1 }).dayOfWeek;
};

const getYear = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).dateFromFields(date).year;
};

const getMonth = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).dateFromFields(date).month;
};

const getDaysInMonth = (date: Temporal.PlainDate) => {
  return Temporal.Calendar.from(date).daysInMonth(date);
};

const formatDate = (date: Temporal.PlainDate) => {
  const year = Temporal.Calendar.from(date).dateFromFields(date).year;
  const month = Temporal.Calendar.from(date).dateFromFields(date).month;
  const day = Temporal.Calendar.from(date).dateFromFields(date).day;

  return `${year}년  ${month < 10 ? "0" + month : month}월  ${
    day < 10 ? "0" + day : day
  }일`;
};

const getPrevMonth = (date: Temporal.PlainDate) => {
  return date.subtract({ months: 1 });
};

const getNextMonth = (date: Temporal.PlainDate) => {
  return date.add({ months: 1 });
};

const createDate = (year: number, month: number, day: number) => {
  return new Temporal.PlainDate(year, month, day);
};

interface DaysItemsProps {
  year: number;
  month: number;
  day: number;
  onClickHandler: (date: Temporal.PlainDate) => void;
}

function DaysItmes({ year, month, day, onClickHandler }: DaysItemsProps) {
  const dateId = "" + year + month + day;
  return (
    <CalendarDaysItems
      key={dateId}
      onClick={() => onClickHandler(createDate(year, month, day))}
    >
      {day}
    </CalendarDaysItems>
  );
}

function Calendar() {
  const [selectDate, setSelectDate] =
    useRecoilState<Temporal.PlainDate>(selectedDate);

  const today = Temporal.Now.plainDateISO();
  const [date, setDate] = useState<Temporal.PlainDate>(today);
  const year = getYear(date);
  const month = getMonth(date);
  const days = getDaysInMonth(date);
  const firstDay: number = getFirstDayOfMonth(date, month);
  const numericDate: number = firstDay;

  const setMyPlan = useSetRecoilState(myPlanAtom);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/user/myplan") {
      const request = { date: date.toString() };
      getPlan(request).then(getPlanResponse);
    }
  }, [location.pathname, date]);

  const getPlanResponse = (responseBody: ResponseBody<GetPlanResponseDto>) => {
    if (!responseBody) return serverErrorMessage("서버에 응답이 없습니다.");
    const { code } = responseBody;

    if (ResponseCode.DATABASE_ERROR === code)
      return serverErrorMessage("서버 오류 입니다.");

    if (ResponseCode.VALIDATION_FAIL === code)
      return serverErrorMessage("인증 오류 입니다. 다시 로그인 해주세요.");

    if ("myPlanList" in responseBody) {
      const { myPlanList } = responseBody;
      setMyPlan(myPlanList);
    }
  };

  useEffect(() => {
    setSelectDate(date);
  }, [selectedDate]);

  const handlePrev = () => {
    setDate(getPrevMonth(date));
  };

  const handleNext = () => {
    setDate(getNextMonth(date));
  };

  const handleDateSelection = (date: Temporal.PlainDate) => {
    setSelectDate(date);
  };

  const renderCalendarDays = () => {
    const startDay = numericDate === 7 ? 1 : firstDay;
    const totalDay = numericDate === 7 ? days : days + startDay;

    return Array(totalDay)
      .fill(1)
      .map((item, index) => {
        const currentDay = index + 1;
        const shouldRender = numericDate === 7 || index >= startDay;

        return shouldRender ? (
          <DaysItmes
            key={`day-item-${year}-${month}-${currentDay}`}
            year={year}
            month={month}
            day={numericDate === 7 ? currentDay : currentDay - startDay}
            onClickHandler={handleDateSelection}
          />
        ) : (
          <EmptyBox key={"E" + index}></EmptyBox>
        );
      });
  };

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <ShowCalendarDate>
            {year}년 {month}월
          </ShowCalendarDate>
          <MonthPicker>
            <MonthChangeBtn onClick={handlePrev}>{"<"}</MonthChangeBtn>
            <MonthChangeBtn onClick={handleNext}>{">"}</MonthChangeBtn>
          </MonthPicker>
        </CalendarHeader>
        <CalendarWeekDay>
          {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
            <CalendarWeekDayItems key={String(day)}>{day}</CalendarWeekDayItems>
          ))}
        </CalendarWeekDay>
        <CalendarDays>{renderCalendarDays()}</CalendarDays>
      </CalendarContainer>
      <ShowDate>{formatDate(selectDate)} </ShowDate>
    </>
  );
}

export default Calendar;
