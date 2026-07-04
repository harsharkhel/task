import svgPaths from "./svg-3fty9tmnqf";
import imgUserAvatar from "./5332c5e0ab033321bbb53e4277c5785da5bf7a2d.png";

function Button() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center pb-[2px] px-[8px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#9b3191] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b3191] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Upcoming</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[8px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function WebNavLinks() {
  return (
    <div className="h-full relative shrink-0" data-name="Web Nav Links">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center pt-[4px] relative size-full">
          <Button />
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15.75">
        <g id="Container">
          <path d={svgPaths.p35fe5700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#316a31] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <Container />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Start Timer</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative shrink-0" data-name="Button">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22876fc0} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative shrink-0" data-name="Button">
      <Container2 />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#eedee6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <UserAvatar />
      </div>
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[8px] relative shrink-0 w-[40px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0" data-name="Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Margin />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#fff7f9] h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#d6c0ce] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[32px] relative size-full">
          <WebNavLinks />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">TASKS TODAY</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9b3191] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[38px]">0</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.pc94c100} fill="var(--fill-0, #84727E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#fff7f9] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container3 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">COMPLETED</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7e4f75] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[38px]">0</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #7E4F75)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#fff7f9] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container7 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">TIME LOGGED</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9b3191] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[38px]">0h 0m</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #84727E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#fff7f9] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container11 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">ACTIVE TIMER</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#134f19] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[38px]">None</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Container">
          <path d={svgPaths.pe40b59c} fill="var(--fill-0, #134F19)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#fff7f9] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container15 />
        <Margin4 />
      </div>
    </div>
  );
}

function QuickStatsBento() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Quick Stats Bento">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#316a31] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Current Tasks</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#134f19] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#d6c0ce] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative size-full">
          <Heading1 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[94.66px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">STATUS</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[214.09px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TASK NAME</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[203.63px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CATEGORY</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[238.91px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TIME LOGGED</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[182.72px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">ACTIONS</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#fff7f9] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#d6c0ce] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function BodyRowData() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body → Row → Data">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-px py-[32px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">No active tasks. Enjoy your break!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <BodyRowData />
      </div>
    </div>
  );
}

function ActiveTasksTable() {
  return (
    <div className="bg-[#fff7f9] relative rounded-[8px] shrink-0 w-full" data-name="Active Tasks Table">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#d6c0ce] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SectionDashboardView() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section - Dashboard View">
      <QuickStatsBento />
      <ActiveTasksTable />
    </div>
  );
}

function MainScrollableCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Scrollable Canvas">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
          <SectionDashboardView />
        </div>
      </div>
    </div>
  );
}

function MainContentWrapper() {
  return (
    <div className="bg-[#fff7f9] content-stretch flex flex-[1_0_0] flex-col h-[1024px] isolate items-start min-w-px overflow-clip relative" data-name="Main Content Wrapper">
      <HeaderTopAppBar />
      <MainScrollableCanvas />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.075px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.075 16">
        <g id="Container">
          <path d={svgPaths.p1cacc200} fill="var(--fill-0, #9B3191)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 1">
      <Container20 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#316a31] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">TaskFlow Pro</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] w-full">
        <p className="leading-[16px]">Productive Session</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container21 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#9b3191] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative shrink-0 w-full" data-name="Button">
      <Container22 />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">New Task</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #7B4C72)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7b4c72] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="bg-[#f4e4ec] relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden className="absolute border-[#7e4f75] border-r-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[12px] relative size-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p1de35f80} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Tasks</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Container">
          <path d={svgPaths.pe40b59c} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Time Tracker</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Analytics</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <List />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Help</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #52424D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#52424d] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Sign Out</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <ItemLink5 />
        <ItemLink6 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#d6c0ce] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function SideNavBarHiddenOnMobile() {
  return (
    <div className="absolute bg-[#fff7f9] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[24px] top-0 w-[280px]" data-name="SideNavBar (Hidden on Mobile)">
      <div aria-hidden className="absolute border-[#d6c0ce] border-r border-solid inset-0 pointer-events-none" />
      <Margin5 />
      <ButtonMargin />
      <Container23 />
      <HorizontalBorder />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex items-start justify-center pl-[280px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 247, 249) 0%, rgb(255, 247, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainContentWrapper />
      <SideNavBarHiddenOnMobile />
    </div>
  );
}