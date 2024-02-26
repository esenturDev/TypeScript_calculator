
import { useState } from "react";
import { Button } from "../ul/button/Button";
import Input from "../ul/input/Input";
import { useDispatch } from "react-redux";
import scss from "./Calculator.module.scss";
import { useAppSelector } from "../../store/store";
import {
	addDel,
	addMinuse,
	addPluse,
	addQure,
	addResult,
	reset,
} from "../../store/tools/calculatorSlice";

const Calculator = () => {
	const [inputValue, setInputValue] = useState("");
	const [isResult, setIsResult] = useState<boolean>(false);
	const calculate = useAppSelector((state) => state.calculatorResults.value);
	const dispatch = useDispatch();

	const handleButtonClick = (newValue: string | number) => {
		setInputValue((prevValue) => {
			if (newValue === "AC" || newValue === "minus" || newValue === "=") {
				return "";
			} else {
				return prevValue + newValue;
			}
		});
	};

	const addPluseResults = () => {
		dispatch(addPluse({ inputsValue: inputValue }));
		setInputValue("");
	};

	const addMinuseResult = () => {
		dispatch(addMinuse({ inputsValue: inputValue }));
		setInputValue("");
	};

	const addDelResult = () => {
		dispatch(addDel({ inputsValue: inputValue }));
		setInputValue("");
	};

	const addQouResult = () => {
		dispatch(addQure({ inputsValue: inputValue }));
		setInputValue("");
	};

	const addPresent = () => {
		dispatch(addResult({ inputsValue: inputValue }));
		setInputValue("");
	};

	const addReset = () => {
		dispatch(reset());
		setInputValue("");
	};

	const sumResults = () => {
		setIsResult(true);
	};

	return (
		<div className={scss.calculater}>
			<div className="container">
				<div className={scss.content}>
					<div></div>
					<div>
						<Input
							type="number"
							value={isResult ? String(calculate) : ""}
							setData={setInputValue}
						/>
						<Input type="number" value={inputValue} setData={setInputValue} />
					</div>
					<div className={scss.buttons}>
						<div className={scss.div1}>
							<Button onClick={addReset}>AC</Button>
							<Button onClick={() => handleButtonClick(7)}>7</Button>
							<Button onClick={() => handleButtonClick(4)}>4</Button>
							<Button onClick={() => handleButtonClick(1)}>1</Button>
						</div>
						<div className={scss.div1}>
							<Button onClick={() => handleButtonClick("minus")}>-</Button>
							<Button onClick={() => handleButtonClick(8)}>8</Button>
							<Button onClick={() => handleButtonClick(5)}>5</Button>
							<Button onClick={() => handleButtonClick(2)}>2</Button>
							<Button onClick={() => handleButtonClick(0)}>0</Button>
						</div>
						<div className={scss.div1}>
							<Button onClick={addPresent}>%</Button>
							<Button onClick={() => handleButtonClick(9)}>9</Button>
							<Button onClick={() => handleButtonClick(6)}>6</Button>
							<Button onClick={() => handleButtonClick(3)}>3</Button>
							<Button onClick={() => handleButtonClick(",")}>,</Button>
						</div>
						<div className={scss.div1}>
							<Button onClick={addDelResult}>/</Button>
							<Button onClick={addQouResult}>*</Button>
							<Button onClick={addMinuseResult}>-</Button>
							<Button onClick={addPluseResults}>+</Button>
							<Button onClick={sumResults}>=</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
