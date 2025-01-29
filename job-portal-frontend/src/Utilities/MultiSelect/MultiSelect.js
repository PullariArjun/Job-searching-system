import { useEffect, useState } from "react";
import {
    Checkbox,
    Combobox,
    Group,
    Input,
    Pill,
    PillsInput,
    ScrollArea,
    useCombobox,
} from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";

const MultiSelect = (props) => {
    useEffect(() => {
        setData(props.options);
        // eslint-disable-next-line
    }, []);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
    });

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val) => {
        setSearch("");

        if (val === "$create") {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
        } else {
            setValue((current) =>
                current.includes(val)
                    ? current.filter((v) => v !== val)
                    : [...current, val]
            );
        }
    };

    const handleValueRemove = (val) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value.slice(0, 1).map((item) => (
        <Pill
            key={item}
            withRemoveButton
            onRemove={() => handleValueRemove(item)}
        >
            {item}
        </Pill>
    ));
    const options = data
        .filter((item) =>
            item.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((item) => (
            <Combobox.Option
                value={item}
                key={item}
                active={value.includes(item)}
            >
                <Group gap="sm">
                    <Checkbox
                        size="xs"
                        color="gold.4"
                        checked={value.includes(item)}
                        onChange={() => {}}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: "none" }}
                    />
                    <span className="text-mine-shaft-300">{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handleValueSelect}
            withinPortal={false}
        >
            <Combobox.DropdownTarget>
                <PillsInput
                    variant="unstyled"
                    rightSection={<IconSelector />}
                    onClick={() => combobox.toggleDropdown()}
                    leftSection={
                        <div className="text-gold-400 p-1 bg-mine-shaft-900 rounded-full mr-2">
                            {props.icon}
                        </div>
                    }
                >
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && (
                                    <Pill>+{value.length - 1} more</Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder className="!text-mine-shaft-200">
                                {props.title}
                            </Input.Placeholder>
                        )}
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Search
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder={`Search ${props.title}`}
                />
                <Combobox.Options mah={200} style={{ overflowY: "auto" }}>
                    <ScrollArea.Autosize type="scroll" mah={200}>
                        {options}

                        {!exactOptionMatch && search.trim().length > 0 && (
                            <Combobox.Option value="$create">
                                + Create {search}
                            </Combobox.Option>
                        )}

                        {exactOptionMatch &&
                            search.trim().length > 0 &&
                            options.length === 0 && (
                                <Combobox.Empty>Nothing found</Combobox.Empty>
                            )}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default MultiSelect;
