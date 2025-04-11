-- if you use terminal to run these scripts, you'll need a lua compiler
-- if you use neovim, just run the current lua file using ":luafile % <Enter>"
--
-- define tables : {[key(optional] = value, [key2(optional] = value}
-- for key, val in pairs(tableName) to iterate

local someTable = { key1 = 2, key2 = 3 }
for key, val in pairs(someTable) do
	print(key, val)
end

-- variables are only references to specific values,
-- if two variables have the same value, they are
-- pointing to the same place
local a = "hello"
local b = a
local t = {}
t[a] = "Lua"

print(t[a])
print(b)

-- tables don't work that way
local testTable1 = { 1, 2, 3 }
local testTable2 = { 1, 2, 3 }
print(testTable1 == testTable2) -- prints false

-- but if you do this

testTable2 = testTable1
print(testTable1 == testTable2) -- prints true

local t = { x = 10, y = 20 }

-- this is metatable, it defines behaviors for table to operate
-- such as __tostring, __add, __index, and so on
local tostring = {
	__tostring = function(tbl)
		return "( " .. tbl.x .. ", " .. tbl.y .. ")"
	end,
}
-- The following two tables are different from each other, as discussed
setmetatable({ x = "abc", y = "def" }, tostring)
print({ x = "abc", y = "def" })

-- instead
local testTable3 = { x = "abc", y = "def" }
setmetatable(testTable3, tostring)
print(testTable3)

local Vector = {}
function Vector:__tostring()
	return "(" .. self.x .. "," .. self.y .. ")"
end

local testVector = { x = 2, y = 3 }
setmetatable(testVector, Vector)
print(testVector)
